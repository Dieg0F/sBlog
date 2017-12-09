import { SectionsListPage } from './../sections-list/sections-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddSectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-section',
  templateUrl: 'add-section.html',
})
export class AddSectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSectionPage');
  }

  backPage() {
    this.navCtrl.setRoot('SectionsListPage');
    this.navCtrl.pop
  }

}
