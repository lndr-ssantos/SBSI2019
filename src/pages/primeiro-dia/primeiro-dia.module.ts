import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeiroDiaPage } from './primeiro-dia';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PrimeiroDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimeiroDiaPage),
    ComponentsModule
  ],
})
export class PrimeiroDiaPageModule {}
