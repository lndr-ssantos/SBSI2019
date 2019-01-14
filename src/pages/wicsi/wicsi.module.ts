import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WicsiPage } from './wicsi';


import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WicsiPage,
  ],
  imports: [
    IonicPageModule.forChild(WicsiPage),
    ComponentsModule
  ],
})
export class WicsiPageModule {}
