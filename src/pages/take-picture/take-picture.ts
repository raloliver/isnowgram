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

    //method called when all elements is rendered    
    ionViewDidLoad() {
        //type this let as any for use method from video element
        let video = <any>document.getElementById('video')

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            //if you need used audio, its possible too
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    video.src = window.URL.createObjectURL(stream)
                    video.play()
                })
        }
    }

    takePicture() {
        let modal = this.modalCtrl.create(SendPicturePage)
        modal.present()
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

}
