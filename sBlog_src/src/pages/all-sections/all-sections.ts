import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllSectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-sections',
  templateUrl: 'all-sections.html',
})
export class AllSectionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllSectionsPage');
  }

  backPage() {
    this.navCtrl.setRoot('SectionsListPage');
    this.navCtrl.pop
  }
}
