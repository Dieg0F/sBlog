import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PostComponent } from '../../components/post/post';

@NgModule({
  declarations: [
    HomePage,
    PostComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class LoginPageModule {}