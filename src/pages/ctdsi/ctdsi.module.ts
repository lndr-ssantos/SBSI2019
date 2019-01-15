import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CtdsiPage } from './ctdsi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CtdsiPage,
  ],
  imports: [
    IonicPageModule.forChild(CtdsiPage),
    ComponentsModule
  ],
})
export class CtdsiPageModule {}
