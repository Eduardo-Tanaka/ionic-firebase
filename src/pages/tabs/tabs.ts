import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	// lazy loading, usar a string do nome do component
  LoginPage = 'LoginPage';
  RegisterPage = 'RegisterPage';
  show = true;

  ionViewWillEnter() {
		console.log('ionViewWillEnter Tabs');
	}
}
