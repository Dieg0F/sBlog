import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private statusBar: StatusBar) {

      statusBar.backgroundColorByHexString('000000');
      this.statusBar.styleLightContent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginApp()
  {
    this.navCtrl.push('HomePage');
  }

  newAccountRedirect()
  {
    this.navCtrl.push('NewAccountPage');
  }

  recoveryPasswordRedirect()
  {
    this.navCtrl.push('RecoveryPasswordPage');
  }
}
