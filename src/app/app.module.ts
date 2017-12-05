import { environment } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PhotosPage } from './../pages/photos/photos';
import { TakePicturePage } from './../pages/take-picture/take-picture';
import { SendPicturePage } from './../pages/send-picture/send-picture';
import { ProfilePage } from '../pages/profile/profile';

export const environment = {
  firebase: {
    apiKey: "AIzaSyCrDHgeoKvkprIvGMqZfkAwRqadQ8C8C5M",
    authDomain: "isnowgram.firebaseapp.com",
    databaseURL: "https://isnowgram.firebaseio.com",
    projectId: "isnowgram",
    storageBucket: "",
    messagingSenderId: "49357697257"
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    TakePicturePage,
    SendPicturePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuth
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    TakePicturePage,
    SendPicturePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
