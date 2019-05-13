import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PrimeiroDiaPage } from '../pages/primeiro-dia/primeiro-dia';
import { SegundoDiaPage } from '../pages/segundo-dia/segundo-dia'
import { TerceiroDiaPage } from '../pages/terceiro-dia/terceiro-dia'
import { QuartoDiaPage } from '../pages/quarto-dia/quarto-dia';
import { QuintoDiaPage } from '../pages/quinto-dia/quinto-dia'

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = InicioPage;

  @ViewChild(Nav) public nav: Nav;
  
  menuItens = [
    {itemNome: '1º dia - 20/05', componente: PrimeiroDiaPage.name},
    {itemNome: '2º dia - 21/05', componente: SegundoDiaPage.name},
    {itemNome: '3º dia - 22/05', componente: TerceiroDiaPage.name},
    {itemNome: '4º dia - 23/05', componente: QuartoDiaPage.name},
    {itemNome: '5º dia - 24/05', componente: QuintoDiaPage.name}
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  navegarPara(componente) {
    this.nav.push(componente);
  }
}

