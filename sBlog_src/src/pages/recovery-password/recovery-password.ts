import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email/email-validator';

@IonicPage()
@Component({
  selector: 'page-recovery-password',
  templateUrl: 'recovery-password.html',
})
export class RecoveryPasswordPage {

  public resetPasswordForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
        .then((user) => {
          let alert = this.alertCtrl.create({
            message: "We sent you a reset link to your email",
            buttons: [
              {
                text: "Ok",
                role: 'cancel',
                handler: () => { this.navCtrl.pop(); }
              }
            ]
          });
          alert.present();

        }, (error) => {
          var errorMessage: string = error.message;
          let errorAlert = this.alertCtrl.create({
            message: errorMessage,
            buttons: [{ text: "Ok", role: 'cancel' }]
          });
          errorAlert.present();
        });
    }
  }

}
