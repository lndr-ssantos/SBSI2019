import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TrilhaPrincipalPage } from './trilha-principal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TrilhaPrincipalPage
  ],
  imports: [
    IonicPageModule.forChild(TrilhaPrincipalPage),
    ComponentsModule
  ],
})
export class TrilhaPrincipalPageModule {}
