import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// para cadastrar
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  // variaveis vindas do front-end
	email: string;
	senha: string;

  // precisa instanciar no construtor para poder usar o firebase
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
  cadastrar() {
  	console.log(this.email, this.senha);
  	// precisa passar um email válido e senha com pelo menos 6 caracteres
  	this.fire.auth.createUserWithEmailAndPassword(this.email, this.senha)
  		.then(data => {
  			console.log(data);
  		})
  		.catch((error: any) => {
        if (error.code === 'auth/email-already-in-use') {
          // Thrown if there already exists an account with the given email address.
        } else if (error.code === 'auth/invalid-email') {
          // Thrown if the email address is not valid.
        } else if (error.code === 'auth/operation-not-allowed') {
          // Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
        } else if (error.code === 'auth/weak-password') {
          // Thrown if the password is not strong enough.
        }
        console.log(error.message);
  		});
  }
}
