import { HomePage } from './../home/home';
import { NewPostPage } from './../new-post/new-post';
import { ViewPostPage } from './../view-post/view-post';
import { UserConfigurationPage } from './../user-configuration/user-configuration';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './user.modal';
import { UserService } from './user.service';

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

  @Input() user_id: number
  @Input() user: User

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private userService: UserService) {

  }

  ngOnInit() {
    this.getUser(this.user)
  }
  
  getUser(u? : User){
    this.userService.getUserById(49)
    .subscribe(user => this.user = user)
  }

  addPost() {
    this.navCtrl.push('NewPostPage');
    this.navCtrl.pop;
    //this.navCtrl.goToRoot;
  }

  viewPost() {
    this.navCtrl.push('ViewPostPage');
    this.navCtrl.goToRoot;
  }
}
