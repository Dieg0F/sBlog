import { HomePage } from './../home/home';
import { ViewSectionPage } from './../view-section/view-section';
import { AllSectionsPage } from './../all-sections/all-sections';
import { AddSectionPage } from './../add-section/add-section';
import { RemoveSectionPage } from './../remove-section/remove-section';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SectionsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sections-list',
  templateUrl: 'sections-list.html',
})
export class SectionsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionsListPage');
  }

  removeSection() {
    this.navCtrl.setRoot('RemoveSectionPage');
    this.navCtrl.goToRoot;
  }

  addSection() {
    this.navCtrl.setRoot('AddSectionPage');
    this.navCtrl.goToRoot;
  }

  allSection() {
    this.navCtrl.setRoot('AllSectionsPage');
    this.navCtrl.goToRoot;
  }

  viewSection() {
    this.navCtrl.setRoot('ViewSectionPage');
    this.navCtrl.goToRoot;
  }

  backPage() {
    this.navCtrl.setRoot('HomePage');
    this.navCtrl.pop
  }

}
