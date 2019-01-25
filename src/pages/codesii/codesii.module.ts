import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodesiiPage } from './codesii';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CodesiiPage,
  ],
  imports: [
    IonicPageModule.forChild(CodesiiPage),
    ComponentsModule
  ],
})
export class CodesiiPageModule {}
