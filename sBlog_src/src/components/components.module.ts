import { NgModule } from '@angular/core';
import { UserFeedComponent } from './user-feed/user-feed';
import { PostComponent } from './post/post';
import { UserContactComponent } from './user-contact/user-contact';
import { UserPageComponent } from './user-page/user-page';
@NgModule({
    declarations: [UserFeedComponent,
        PostComponent,
        UserContactComponent,
        UserPageComponent],
    imports: [],
    exports: [UserFeedComponent,
        PostComponent,
        UserContactComponent,
        UserPageComponent]
})
export class ComponentsModule { }
