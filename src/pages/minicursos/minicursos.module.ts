import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinicursosPage } from './minicursos';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MinicursosPage
  ],
  imports: [
    IonicPageModule.forChild(MinicursosPage),
    ComponentsModule
  ],
})
export class MinicursosPageModule {}
