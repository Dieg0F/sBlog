import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllSectionsPage } from './all-sections';

@NgModule({
  declarations: [
    AllSectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllSectionsPage),
  ],
})
export class AllSectionsPageModule {}
