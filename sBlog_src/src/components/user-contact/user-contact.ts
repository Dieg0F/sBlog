import { Component, Input } from '@angular/core';
import { User } from '../../pages/user/user.modal';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { UserPage } from '../../pages/user/user';

/**
 * Generated class for the UserContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-contact',
  templateUrl: 'user-contact.html'
})

export class UserContactComponent {

  @Input() user: User

  constructor(public modalController: ModalController) {    
  }

  opemModal(u?: User)  
  {
    let modal = this.modalController.create(UserPage, u)
    modal.present()
  }

}
