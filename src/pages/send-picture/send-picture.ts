import { Component, ViewChild } from '@angular/core';
import { ViewController, AlertController, NavParams, Slides, LoadingController, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';
import * as firebase from 'firebase';


@Component({
    selector: 'page-send-picture',
    templateUrl: 'send-picture.html'
})
export class SendPicturePage {
    @ViewChild(Slides) slides: Slides

    public user: string = ''
    public pictures: AngularFireList<any>
    public form: FormGroup
    public location: string = ''
    public picture: string = ''
    public filter: string = 'default'
    public filters: string[] = [
        "default",
        "_1977",
        "aden",
        "amaro",
        "brannan",
        "brooklyn",
        "clarendon",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2"
    ]

    constructor(
        private navCtrl: NavController,
        private fb: FormBuilder,
        private afAuth: AngularFireAuth,
        private loadCtrl: LoadingController,
        private viewCtrl: ViewController,
        private alertCtrl: AlertController,
        private db: AngularFireDatabase,
        private navParams: NavParams
    ) {
        //connect observable to database
        this.pictures = db.list('/pictures')
        this.picture = this.navParams.get('picture') //provide from TakePicturePage

        afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user.email
            }
        })

        this.form = this.fb.group({
            title: ['', Validators.compose([
                Validators.minLength(3),
                Validators.maxLength(30),
                Validators.required
            ])],
            message: ['', Validators.compose([
                Validators.minLength(3),
                Validators.maxLength(280),
                Validators.required
            ])]
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data) => {
                //always latitude first
                this.location = data.coords.latitude + ', ' + data.coords.longitude
            }, (err) => {
                let alert = this.alertCtrl.create({
                    title: 'Ops, algo de errado não está certo!',
                    subTitle: 'Não foi possível encontrar a sua localização.',
                    buttons: ['OK']
                })
                alert.present()
            })
        }
    }

    changeFilter() {
        //import change filter slides with ViewChild from angular and Slides from ionic
        let currentIndex = this.slides.getActiveIndex()
        this.filter = this.filters[currentIndex]
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

    submit() {
        let load = this.loadCtrl.create({ content: "Enviado Foto..." })
        load.present()
        //send picture to firebase
        this.pictures.push({
            user: this.user,
            image: this.picture,
            filter: this.filter,
            location: this.location,
            title: this.form.controls['title'].value,
            message: this.form.controls['message'].value,
            date: firebase.database.ServerValue.TIMESTAMP
        }).then(resolve => {
            load.dismiss()
            this.navCtrl.setRoot(HomePage);
        })
        //#TODO: catch errors
        /** 
        .catch(() => {
            load.dismiss()
            let alert = this.alertCtrl.create({
              title: 'Ops, algo de errado não está certo!',
              subTitle: 'Usuário ou senha estão incorretos.',
              buttons: ['OK']
            })
            alert.present()
        })
        **/
    }

}
