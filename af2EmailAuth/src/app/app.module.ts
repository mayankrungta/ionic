import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC5NmLMdbj9SgepHupznGIJgvMWJRNUeA4",
    authDomain: "af2emailauth-723fd.firebaseapp.com",
    databaseURL: "https://af2emailauth-723fd.firebaseio.com",
    projectId: "af2emailauth-723fd",
    storageBucket: "",
    messagingSenderId: "170562734360"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule      
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
