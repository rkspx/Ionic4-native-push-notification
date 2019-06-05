import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.newSubscriberNotification = functions.firestore
    .document('subscribers/{subId}')
    .onCreate( async event => {
        const data = event.data();

        const userId = data['userId'];
        const subscriber = data['subscriberId'];

        const payload  = {
            notification: {
                title: 'New Subscriber',
                body: `${subscriber} is following your content`,
                icon: 'https://goo.gl/Fz9nrQ'
            }
        }
    })
