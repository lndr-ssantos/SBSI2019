import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EisiPage } from './eisi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EisiPage,
  ],
  imports: [
    IonicPageModule.forChild(EisiPage),
    ComponentsModule
  ],
})
export class EisiPageModule {}
