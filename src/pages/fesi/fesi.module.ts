import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FesiPage } from './fesi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FesiPage,
  ],
  imports: [
    IonicPageModule.forChild(FesiPage),
    ComponentsModule
  ],
})
export class FesiPageModule {}
