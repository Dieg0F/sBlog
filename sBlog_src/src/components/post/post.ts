import { Component , Input, OnInit} from '@angular/core';
import { Post } from './post.modal';
import { UserService } from '../../pages/user/user.service';
import { User } from '../../pages/user/user.modal';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent implements OnInit{  

  @Input() post: Post
  @Input() user: User

  constructor(private userService: UserService) {    
    
  }

  ngOnInit() {
    this.userService.getUserById(this.post.user_id)
    .subscribe(user => this.user = user)
  }
  
}
