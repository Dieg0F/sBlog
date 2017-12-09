import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserConfigurationPage } from './user-configuration';

@NgModule({
  declarations: [
    UserConfigurationPage,
  ],
  imports: [
    IonicPageModule.forChild(UserConfigurationPage),
  ],
})
export class UserConfigurationPageModule {}
