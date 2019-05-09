import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { ComponentsModule } from '../components/components.module';
import { PrimeiroDiaPageModule } from '../pages/primeiro-dia/primeiro-dia.module'
import { PrimeiroDiaPage } from '../pages/primeiro-dia/primeiro-dia'
import { SegundoDiaPageModule } from '../pages/segundo-dia/segundo-dia.module'
import { SegundoDiaPage } from '../pages/segundo-dia/segundo-dia'
import { TerceiroDiaPageModule } from '../pages/terceiro-dia/terceiro-dia.module'
import { TerceiroDiaPage } from '../pages/terceiro-dia/terceiro-dia'
import { LaunchNavigator } from '@ionic-native/launch-navigator'

@NgModule({
  declarations: [
    MyApp,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    ComponentsModule,
    PrimeiroDiaPageModule,
    SegundoDiaPageModule,
    TerceiroDiaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PrimeiroDiaPage,
    SegundoDiaPage,
    TerceiroDiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
