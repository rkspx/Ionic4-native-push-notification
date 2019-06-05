import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.newSubscriberNotification = functions.firestore
    .document('subscribers/{subId}')
    .onCreate( async event => {
        const data = event.data();

        if(data) {
            const userId = data.userId;
            const subscriber = data.subscriberId;

            const payload  = {
                notification: {
                    title: 'New Subscriber',
                    body: `${subscriber} is following your content`,
                    icon: 'https://goo.gl/Fz9nrQ'
                }
            }

            const db = admin.firestore();
            const devicesRef = db.collection('devices').where('userId',  '==', userId);

            const devices = await devicesRef.get();
            const tokens: string[] = [];

            if(devices) {
                devices.forEach(result => {
                    const token = result.data().token;
                    tokens.push(token);
                });
    
                return admin.messaging().sendToDevice(tokens, payload);
            } else {
                console.log('no user for that id found');
                return;
            }
        } else {
            console.log('no data');
            return;
        }
    })
