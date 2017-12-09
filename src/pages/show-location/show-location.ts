import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-show-location',
    templateUrl: 'show-location.html'
})
export class ShowLocationPage {
    public location: string = ''

    constructor(private navParams: NavParams, private viewCtrl: ViewController) {
        this.location = this.navParams.get('location')

    }

    ionViewDidLoad() {
        let iframe = '<iframe style="height: 90vh;" width="100%" height="99%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCrDHgeoKvkprIvGMqZfkAwRqadQ8C8C5M&q=' + this.location + '" allowfullscreen></iframe>'
        document.getElementById('location').innerHTML = iframe
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }
}