import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from './fcm.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FcmService,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeNotification();
    });
  }

  private initializeNotification() {
    this.fcm.getToken().then(
      token => {
        this.fcm.listenToNotifications().pipe(
          tap(message => {
            console.log(token)
            this.toastCtrl.create({
              message: message.body,
              duration: 3000
            }).then(
              toast => toast.present(),
              err => console.log(err)
            )
          })
        ).subscribe();
      }
    )
  }
}
