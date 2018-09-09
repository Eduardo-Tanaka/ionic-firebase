import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SideMenuPage {

	@ViewChild(Nav) nav: Nav;

	rootPage:any = 'HomePage';

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

  openPage(page:string) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page);
  }
}
