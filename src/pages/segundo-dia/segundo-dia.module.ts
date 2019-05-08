import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegundoDiaPage } from './segundo-dia';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SegundoDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(SegundoDiaPage),
    ComponentsModule
  ],
})
export class SegundoDiaPageModule {}
