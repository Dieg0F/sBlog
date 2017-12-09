import { ToastController } from 'ionic-angular';

export class Toast {

  constructor(public toastCtrl: ToastController) {
  }

  public show(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}