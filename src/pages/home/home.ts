import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhotosPage } from './../photos/photos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photosTab: any
  public profileTab: any

  constructor(public navCtrl: NavController) {
    this.photosTab = PhotosPage
    this.profileTab = PhotosPage
  }

}
