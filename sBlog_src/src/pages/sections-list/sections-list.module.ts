import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectionsListPage } from './sections-list';

@NgModule({
  declarations: [
    SectionsListPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionsListPage),
  ],
})
export class SectionsListPageModule {}
