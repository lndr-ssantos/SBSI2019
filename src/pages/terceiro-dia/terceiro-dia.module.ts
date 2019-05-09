import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerceiroDiaPage } from './terceiro-dia';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TerceiroDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(TerceiroDiaPage),
    ComponentsModule
  ],
})
export class TerceiroDiaPageModule {}
