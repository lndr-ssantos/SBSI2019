import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { TrilhaPrincipalPage } from '../pages/trilha-principal/trilha-principal';
import { MinicursosPage } from '../pages/minicursos/minicursos';
import { WicsiPage } from '../pages/wicsi/wicsi';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = InicioPage;

  @ViewChild(Nav) public nav: Nav;
  
  menuItens = [
    {itemNome: 'Trilha Principal', componente: TrilhaPrincipalPage.name},
    {itemNome: 'Minicursos', componente: MinicursosPage.name},
    {itemNome: 'WICSI', componente: WicsiPage.name}
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
    console.log(componente);
    this.nav.push(componente);
  }
}

