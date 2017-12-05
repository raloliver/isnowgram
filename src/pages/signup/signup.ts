import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
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
    }

    submit() {
        let load = this.loadCtrl.create({ content: "Validando Dados..." })
        load.present()

        //promisse of create user
        this.afAuth.auth.createUserWithEmailAndPassword(
            this.form.controls['email'].value,
            this.form.controls['password'].value)
            .then(() => {
                load.dismiss()
                let alert = this.alertCtrl.create({
                    title: 'Bem vindo ao isNOWgram!',
                    subTitle: 'Cadastro realizado com sucesso.',
                    buttons: ['OK']
                })
                alert.present()
            })
            .catch(() => {
                load.dismiss()
                let alert = this.alertCtrl.create({
                    title: 'Ops, algo de errado não está certo!',
                    subTitle: 'Cadastro NÃO realizado. Por favor tente novamente mais tarde.',
                    buttons: ['OK']
                })
                alert.present()
            })
    }

    goToLogin() {
        this.navCtrl.setRoot(LoginPage)
    }
}
