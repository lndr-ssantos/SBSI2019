import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrandsiBrPage } from './grandsi-br';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GrandsiBrPage,
  ],
  imports: [
    IonicPageModule.forChild(GrandsiBrPage),
    ComponentsModule
  ],
})
export class GrandsiBrPageModule {}
