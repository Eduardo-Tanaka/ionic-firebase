import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecuperarPage } from './recuperar';

@NgModule({
  declarations: [
    RecuperarPage,
  ],
  imports: [
    IonicPageModule.forChild(RecuperarPage),
  ],
  exports: [
  	RecuperarPage // exportar para utilizar o lazy loading
  ]
})
export class RecuperarPageModule {}
