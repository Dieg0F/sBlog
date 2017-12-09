import { HomePage } from './../home/home';
import { NewPostPage } from './../new-post/new-post';
import { ViewPostPage } from './../view-post/view-post';
import { UserConfigurationPage } from './../user-configuration/user-configuration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  addPost() {
    this.navCtrl.setRoot('NewPostPage');
    this.navCtrl.pop;
    //this.navCtrl.goToRoot;
  }

  viewPost() {
    this.navCtrl.setRoot('ViewPostPage');
    this.navCtrl.goToRoot;
  }

  userConfigs() {
    this.navCtrl.setRoot('UserConfigurationPage');
    this.navCtrl.goToRoot;
  }

  backPage() {
    this.navCtrl.setRoot('HomePage');
    this.navCtrl.pop
  }



}
