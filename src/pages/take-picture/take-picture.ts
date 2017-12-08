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
        let video = <any>document.getElementById('video')
        let canvas = <any>document.getElementById('canvas')
        let context = canvas.getContext('2d')

        //draw image
        context.drawImage(video, 0, 0, 320, 240)

        //animation to video
        video.classList.add('animated')
        video.classList.add('flash')

        //get picture from camera and convert to base64
        setTimeout(() => {
            //close modal
            this.viewCtrl.dismiss()

            //open a new modal with preview picutre
            let modal = this.modalCtrl.create(SendPicturePage, {
                picture: canvas.toDataURL()
            })
            modal.present()
        }, 775);

        // let modal = this.modalCtrl.create(SendPicturePage)
        // modal.present()
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

}
