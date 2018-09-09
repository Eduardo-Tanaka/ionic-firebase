import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// para fazer o logout
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	// variável para mostrar o email na página
	// email: string;

	// injetar o firebase no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  	// pega o email do usuário firebase
  	// this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logout() {
    //console.log('logout');
  	// desloga o usuário
  	this.fire.auth.signOut();
  	// manda para a página de login como página root da aplicação
  	this.navCtrl.setRoot(TabsPage);
  }
}
