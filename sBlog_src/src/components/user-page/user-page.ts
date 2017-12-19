import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../pages/user/user.modal';
import { UserService } from '../../pages/user/user.service';

/**
 * Generated class for the UserPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-page-detail',
  templateUrl: 'user-page.html'
})

export class UserPageComponent implements OnInit {

  @Input() user: User

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserById(49)
      .subscribe(user => this.user = user)
  }


}
