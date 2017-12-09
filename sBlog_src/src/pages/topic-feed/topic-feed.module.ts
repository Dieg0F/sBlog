import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicFeedPage } from './topic-feed';

@NgModule({
  declarations: [
    TopicFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicFeedPage),
  ],
})
export class TopicFeedPageModule {}
