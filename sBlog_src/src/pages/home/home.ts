import { ConfigurationPage } from './../configuration/configuration';
import { UserPage } from './../user/user';
import { SectionsListPage } from './../sections-list/sections-list';
import { FeedPage } from './../feed/feed';

import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Tabs } from 'ionic-angular/components/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //tabRoot = 'FeedPage';
  tab2Root = 'SectionsListPage';
  tabRoot = 'LoginPage';

  constructor(public navCtrl: NavController) {

  }

  userPage() {
    this.navCtrl.setRoot('UserPage');
    this.navCtrl.goToRoot;
  }

  configurationPage() {
    this.navCtrl.setRoot('ConfigurationPage');
    this.navCtrl.goToRoot;
  }

  sectionPage() {
    this.navCtrl.setRoot('SectionsListPage');
    this.navCtrl.goToRoot;
  }

}
