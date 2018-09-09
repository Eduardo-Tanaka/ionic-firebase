import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SideMenuPage } from '../pages/sidemenu/sidemenu';

// para verificar se já está logado
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  // precisa injetar o AngularFireAuth no construtor
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    afAuth: AngularFireAuth, public appCtrl: App) {
    // cria um observer para verificar se o usuário está logado ou não e redireciona para a página apropriada
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        // se estiver logado
        // usa o appCtrl para limpar todas as views ao inicilizar a HomePage = remover as tabs
        this.appCtrl.getRootNavs()[0].setRoot(SideMenuPage);
        authObserver.unsubscribe();
      } else {
        // se não estiver logado
        this.rootPage = TabsPage;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

