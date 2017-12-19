import { ConfigurationPage } from './../configuration/configuration';
import { UserPage } from './../user/user';
import { SectionsListPage } from './../sections-list/sections-list';
import { FeedPage } from './../feed/feed';

import { Component, OnInit, Input } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Tabs } from 'ionic-angular/components/tabs/tabs';
import { UserService } from '../user/user.service';
import { Post } from '../../components/post/post.modal';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  @Input() posts: Post[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userService: UserService) {

  }

  ngOnInit() {
    this.userService.posts()
      .subscribe(posts => this.posts = posts)
  }

  userPage() {
    this.navCtrl.push('UserPage');
    this.navCtrl.goToRoot;
  }

  configurationPage() {
    this.navCtrl.push('ConfigurationPage');
    this.navCtrl.goToRoot;
  }

  sectionPage() {
    this.navCtrl.push('SectionsListPage');
    this.navCtrl.goToRoot;
  }

}