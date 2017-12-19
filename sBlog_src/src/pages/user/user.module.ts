import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { UserPageComponent } from '../../components/user-page/user-page';
import { UserFeedComponent } from '../../components/user-feed/user-feed';

@NgModule({
  declarations: [
    UserPage,
    UserPageComponent,
    UserFeedComponent
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserPageModule {}
