import { LoadingController } from 'ionic-angular';

export class Loading {
  constructor(public loadingCtrl: LoadingController) {
  }

  show(message) {
    let loader = this.loadingCtrl.create({
      content: message,
      duration: 3000
    });
    loader.present();
  }
}