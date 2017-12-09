import { TopicFeedPage } from './../topic-feed/topic-feed';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewSectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-section',
  templateUrl: 'view-section.html',
})
export class ViewSectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewSectionPage');
  }

  viewTopic() {
    this.navCtrl.setRoot('TopicFeedPage');
    this.navCtrl.goToRoot;
  }

  backPage() {
    this.navCtrl.setRoot('SectionsListPage');
    this.navCtrl.pop
  }
}
