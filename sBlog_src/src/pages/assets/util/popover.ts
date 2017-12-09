import { PopoverController } from 'ionic-angular';

export class Popover {
  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create("MyPopOverPage");
    popover.present();
  }
}