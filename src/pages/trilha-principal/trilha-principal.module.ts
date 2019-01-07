import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrilhaPrincipalPage } from './trilha-principal';
import { AccordionComponent } from '../../components/accordion/accordion';

@NgModule({
  declarations: [
    TrilhaPrincipalPage,
    AccordionComponent
  ],
  imports: [
    IonicPageModule.forChild(TrilhaPrincipalPage),
  ],
})
export class TrilhaPrincipalPageModule {}
