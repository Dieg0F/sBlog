import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPostPage } from './view-post';

@NgModule({
  declarations: [
    ViewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPostPage),
  ],
})
export class ViewPostPageModule {}
