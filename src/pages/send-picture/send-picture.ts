import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-send-picture',
    templateUrl: 'send-picture.html'
})
export class SendPicturePage {

    constructor(private viewCtrl: ViewController) {

    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

}
