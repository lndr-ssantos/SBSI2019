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
import { WicsiPageModule } from '../pages/wicsi/wicsi.module';
import { WicsiPage } from '../pages/wicsi/wicsi';
import { CtdsiPageModule } from '../pages/ctdsi/ctdsi.module';
import { CtdsiPage } from '../pages/ctdsi/ctdsi';
import { EisiPageModule } from '../pages/eisi/eisi.module';
import { EisiPage } from '../pages/eisi/eisi';
import { FesiPageModule } from '../pages/fesi/fesi.module';
import { FesiPage } from '../pages/fesi/fesi';
import { GrandsiBrPageModule } from '../pages/grandsi-br/grandsi-br.module';
import { GrandsiBrPage } from '../pages/grandsi-br/grandsi-br';

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
    MinicursosPageModule,
    WicsiPageModule,
    CtdsiPageModule,
    EisiPageModule,
    FesiPageModule,
    GrandsiBrPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    TrilhaPrincipalPage,
    MinicursosPage,
    WicsiPage,
    CtdsiPage,
    EisiPage,
    FesiPage,
    GrandsiBrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
