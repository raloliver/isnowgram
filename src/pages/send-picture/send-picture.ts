import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-send-picture',
    templateUrl: 'send-picture.html'
})
export class SendPicturePage {
    public location: string = ''

    constructor(private viewCtrl: ViewController, private alertCtrl: AlertController) {

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
