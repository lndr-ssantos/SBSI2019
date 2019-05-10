import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuartoDiaPage } from './quarto-dia';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    QuartoDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuartoDiaPage),
    ComponentsModule
  ],
})
export class QuartoDiaPageModule {}
