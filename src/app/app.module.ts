import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { TrilhaPrincipalPage } from '../pages/trilha-principal/trilha-principal';
import { TrilhaPrincipalPageModule } from '../pages/trilha-principal/trilha-principal.module';
import { MinicursosPageModule } from '../pages/minicursos/minicursos.module';
import { MinicursosPage } from '../pages/minicursos/minicursos';
import { ComponentsModule } from '../components/components.module';
import { AccordionComponent } from '../components/accordion/accordion';

@NgModule({
  declarations: [
    MyApp,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    ComponentsModule,
    TrilhaPrincipalPageModule,
    MinicursosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    TrilhaPrincipalPage,
    MinicursosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
