import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}

export const firebaseConfig = {
  apiKey: "AIzaSyAR06bI2wjQHuFTd1MThQ_CoD3D_44ULeM",
  authDomain: "sblog-9a149.firebaseapp.com",
  databaseURL: "https://sblog-9a149.firebaseio.com",
  projectId: "sblog-9a149",
  storageBucket: "sblog-9a149.appspot.com",
  messagingSenderId: "706344072159"
}