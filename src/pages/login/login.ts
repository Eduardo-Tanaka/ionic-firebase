import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
// para logar
import { AngularFireAuth } from 'angularfire2/auth';
// facebook
import * as firebase from 'firebase/app';
// importa a class user
import { User } from './user';

import { SideMenuPage } from '../sidemenu/sidemenu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	// variaveis vindas do front-end
	email: string;
	senha: string;

	// inicializa a classe User
	user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private fire: AngularFireAuth, public appCtrl: App) {
    console.log('constructor login');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar() {
  	console.log(this.email, this.senha);
  	this.fire.auth.signInWithEmailAndPassword(this.email, this.senha)
  		.then(data => {
  			console.log('logar: ', data);

  			this.user.email = this.email;
  			this.user.senha = this.senha;

  			// envia para a página selecionada e a transforma como a 1º página da aplicação
        // usa o appCtrl para limpar todas as views ao inicilizar a HomePage = remover as tabs
        this.appCtrl.getRootNavs()[0].setRoot(SideMenuPage);
  		})
  		.catch((error: any) => {
  			/* Error Codes
					- auth/invalid-email
						Thrown if the email address is not valid.
					- auth/user-disabled
						Thrown if the user corresponding to the given email has been disabled.
					- auth/user-not-found
						Thrown if there is no user corresponding to the given email.
					- auth/wrong-password
						Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
  			*/
  			console.log(error, error.code, error.message);
  		});
  }

  logarFacebook() {
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(data => {
        console.log('facebook: ', data);

        // envia para a página selecionada e a transforma como a 1º página da aplicação
        // usa o appCtrl para limpar todas as views ao inicilizar a HomePage = remover as tabs
        this.appCtrl.getRootNav().setRoot(SideMenuPage);
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

  logarGoogle() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        console.log('google: ', data);

        // envia para a página selecionada e a transforma como a 1º página da aplicação
        // usa o appCtrl para limpar todas as views ao inicilizar a HomePage = remover as tabs
        this.appCtrl.getRootNav().setRoot(SideMenuPage);
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

  linkRecuperar() {
    this.navCtrl.push('RecuperarPage');
  }
}
