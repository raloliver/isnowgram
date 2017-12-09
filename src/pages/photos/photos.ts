import { Component } from '@angular/core';
import { LoadingController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShowLocationPage } from './../show-location/show-location';

@Component({
    selector: 'page-photos',
    templateUrl: 'photos.html'
})
export class PhotosPage {
    public pictures: any[] = []

    constructor(
        private db: AngularFireDatabase,
        public loadCtrl: LoadingController,
        private modalCtrl: ModalController) {
        let load = this.loadCtrl.create({ content: "Atualizando Timeline..." })
        load.present()

        db.list<any>('/pictures').valueChanges().subscribe(pictures => {
            this.pictures = pictures.reverse()
            load.dismiss()
        })
    }

    showLocation(location) {
        let modal = this.modalCtrl.create(ShowLocationPage, { location: location });
        modal.present();
    }

}
