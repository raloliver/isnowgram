import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { ShowMapPage } from '../show-map/show-map';

@Component({
    selector: 'page-photos',
    templateUrl: 'photos.html'
})
export class PhotosPage {
    public pictures: any[] = []

    constructor(db: AngularFireDatabase, public loadCtrl: LoadingController) {
        let load = this.loadCtrl.create({ content: "Atualizando Timeline..." })
        load.present()

        db.list<any>('/pictures').valueChanges().subscribe(pictures => {
            this.pictures = pictures.reverse()
            load.dismiss()
        })
        /*
        showLocation(location) {
            let modal = this.modalCtrl.create(ShowMapPage, { location: location });
            modal.present();
        }
        */

    }

}
