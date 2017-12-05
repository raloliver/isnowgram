import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
        private afAuth: AngularFireAuthModule,
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
    }

    goToLogin() {
        this.navCtrl.setRoot(LoginPage)
    }
}
