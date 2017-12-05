import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import { SendPicturePage } from '../send-picture/send-picture';

@Component({
    selector: 'page-take-picture',
    templateUrl: 'take-picture.html'
})
export class TakePicturePage {

    constructor(private viewCtrl: ViewController, private modalCtrl: ModalController) {

    }

    takePicture() {
        let modal = this.modalCtrl.create(SendPicturePage)
        modal.present()
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

}
