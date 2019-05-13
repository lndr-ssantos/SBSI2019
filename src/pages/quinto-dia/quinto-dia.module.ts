import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuintoDiaPage } from './quinto-dia';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    QuintoDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuintoDiaPage),
    ComponentsModule
  ],
})
export class QuintoDiaPageModule {}
