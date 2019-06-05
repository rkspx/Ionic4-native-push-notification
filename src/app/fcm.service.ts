import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private firebaseNative: Firebase,
    private afs: AngularFirestore,
    private platform: Platform
  ) { }

  async getToken() { 
    let token;
    if(this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
    }

    if(this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }

    return this.saveToken(token);
  }

  private saveToken(token) { 
    if(!token) return;
    const deviceRef = this.afs.collection('devices');
    const docData = {
      token, userId: 'testing'
    }
    return deviceRef.doc(token).set(docData);
  }

  listenToNotifications() { 
    return this.firebaseNative.onNotificationOpen();
  }

}
