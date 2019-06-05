import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FcmService } from './fcm.service';

const config = {
    apiKey: "AIzaSyAzEPl80nKnzVkmkW0GwwXfd6yPS5RuCTA",
    authDomain: "nephalem-48b95.firebaseapp.com",
    databaseURL: "https://nephalem-48b95.firebaseio.com",
    projectId: "nephalem-48b95",
    storageBucket: "nephalem-48b95.appspot.com",
    messagingSenderId: "193459787861",
    appId: "1:193459787861:web:37e9f4304dd04e82"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(config), AngularFirestoreModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    FcmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
