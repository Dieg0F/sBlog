import { LoadingController } from 'ionic-angular';

export class Loading {
  constructor(public loadingCtrl: LoadingController) {
  }

  present() {
    let loader = this.loadingCtrl.create({
      content: "Loading...",
      duration: 3000
    });
    loader.present();
  }

  show(message) {
    let loader = this.loadingCtrl.create({
      content: message,
      duration: 3000
    });
    loader.present();
  }
}