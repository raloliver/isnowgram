import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from './../signup/signup';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public form: FormGroup

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(140),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    })

    //observable to watch user status
    afAuth.authState.subscribe(user => {
      if (user) {
        this.navCtrl.setRoot(HomePage)
      }
    })
  }

  submit() {
    let load = this.loadCtrl.create({ content: "Validando Dados..." })
    load.present()

    //promisse of signup
    this.afAuth.auth.signInWithEmailAndPassword(
      this.form.controls['email'].value,
      this.form.controls['password'].value)
      .then(() => {
        load.dismiss()
        this.navCtrl.setRoot(HomePage)
      })
      .catch(() => {
        load.dismiss()
        let alert = this.alertCtrl.create({
          title: 'Ops, algo de errado não está certo!',
          subTitle: 'Usuário ou senha estão incorretos.',
          buttons: ['OK']
        })
        alert.present()
      })
  }

  goToSignup() {
    this.navCtrl.setRoot(SignupPage)
  }

}
