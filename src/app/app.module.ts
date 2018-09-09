import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { SideMenuPage } from '../pages/sidemenu/sidemenu';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGzPUdTrwn9TiC655eimMIzwR1Alm5tWA",
  authDomain: "ionic-4c439.firebaseapp.com",
  databaseURL: "https://ionic-4c439.firebaseio.com",
  projectId: "ionic-4c439",
  storageBucket: "ionic-4c439.appspot.com",
  messagingSenderId: "543859538185"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SideMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SideMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
