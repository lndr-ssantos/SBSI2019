import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WtdsiPage } from './wtdsi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WtdsiPage,
  ],
  imports: [
    IonicPageModule.forChild(WtdsiPage),
    ComponentsModule
  ],
})
export class WtdsiPageModule {}
