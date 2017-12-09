import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class ConfigurationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
  }


  comeBack()
  {
    this.navCtrl.setRoot('HomePage');
    this.navCtrl.goToRoot;
  }

  logoff()
  {
    this.navCtrl.setRoot('LoginPage');
    /// Make all code here
    this.navCtrl.goToRoot;
  }


}
