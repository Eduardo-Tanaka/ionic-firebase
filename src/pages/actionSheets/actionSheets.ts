import { Component } from '@angular/core';
import { IonicPage, Platform, ActionSheetController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-actionSheets',
  templateUrl: 'actionSheets.html',
})
export class ActionSheetsPage {

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController
  ) { }

  openActionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      subTitle: 'SubTitle',
      cssClass: 'action-sheets-basic-page',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
        	text: 'Custom Dismiss',
        	icon: 'home',
        	handler: () => {
        		// user has clicked the action sheet button
			      // begin the action sheet's dimiss transition
			      let navTransition = actionSheet.dismiss();

        		console.log('Custom Dismiss clicked');

        		// quando terminar a animação executa a ação
        		navTransition.then(() => {
		          this.navCtrl.pop();
		        });
        		return false;
        	}
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
