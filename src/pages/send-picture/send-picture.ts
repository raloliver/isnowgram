import { Component } from '@angular/core';
import { ViewController, AlertController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-send-picture',
    templateUrl: 'send-picture.html'
})
export class SendPicturePage {
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
        private viewCtrl: ViewController,
        private alertCtrl: AlertController,
        private navParams: NavParams) {
        this.picture = this.navParams.get('picture') //provide from TakePicturePage
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

    dismiss() {
        this.viewCtrl.dismiss()
    }

}
