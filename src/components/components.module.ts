import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion/accordion';
import { IonicModule } from 'ionic-angular';
import { UnitmapComponent } from './unitmap/unitmap';

@NgModule({
	declarations: [
		AccordionComponent,
    	UnitmapComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		AccordionComponent,
    	UnitmapComponent
	]
})
export class ComponentsModule {}
