import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetsPage } from './actionSheets';

@NgModule({
  declarations: [
    ActionSheetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetsPage),
  ],
  exports: [
  	ActionSheetsPage // exportar para utilizar o lazy loading
  ]
})
export class ActionSheetsPageModule {}
