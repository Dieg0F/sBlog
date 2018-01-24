import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      // #AARRGGBB where AA is an alpha value
      if (platform.is('android')) {
        statusBar.backgroundColorByHexString("#33000000");
      }
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCFty2-DwykMr7IrXoArcS54SSnBXr7L2s",
      authDomain: "sblog-18f74.firebaseapp.com",
      databaseURL: "https://sblog-18f74.firebaseio.com",
      projectId: "sblog-18f74",
      storageBucket: "sblog-18f74.appspot.com",
      messagingSenderId: "500578678941"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else {
        this.rootPage = 'HomePage';
        unsubscribe();
      }
    });
  }

}

