import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// para recuperar senha
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {

	// variaveis vindas do front-end
	email: string;

	// injetar o firebase no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarPage');
  }

  recuperar() {
  	// envia um email para o usuário alterar sua senha
  	this.fire.auth.sendPasswordResetEmail(this.email)
  		.then(() => {
  			console.log('email enviado');
  			this.navCtrl.pop(); // volta para a página anterior
  		})
  		.catch((error: any) => {
  			/* 
  			- auth/invalid-email
					Thrown if the email address is not valid.
				- auth/missing-android-pkg-name
					An Android package name must be provided if the Android app is required to be installed.
				- auth/missing-continue-uri
					A continue URL must be provided in the request.
				- auth/missing-ios-bundle-id
					An iOS Bundle ID must be provided if an App Store ID is provided.
				- auth/invalid-continue-uri
					The continue URL provided in the request is invalid.
				- auth/unauthorized-continue-uri
					The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
				- auth/user-not-found
					Thrown if there is no user corresponding to the email address.
				*/
				console.log(error.message);
  		});
  }
}
