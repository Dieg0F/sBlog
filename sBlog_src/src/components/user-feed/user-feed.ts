import { Component, Input } from '@angular/core';
import { Post } from '../post/post.modal';
import { UserService } from '../../pages/user/user.service';
import { User } from '../../pages/user/user.modal';

/**
 * Generated class for the UserFeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-feed',
  templateUrl: 'user-feed.html'
})
export class UserFeedComponent {

  @Input() postId: number  
  @Input() post: Post
  @Input() user: User

  constructor(private userService: UserService) {        
  }

  ngOnInit() {    
    this.userService.getPostById(this.postId)
    .subscribe(user => this.post = user)
  }
}
