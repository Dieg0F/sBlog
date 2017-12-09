import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSectionPage } from './add-section';

@NgModule({
  declarations: [
    AddSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSectionPage),
  ],
})
export class AddSectionPageModule {}
