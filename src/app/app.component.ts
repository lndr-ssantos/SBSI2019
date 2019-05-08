import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { TrilhaPrincipalPage } from '../pages/trilha-principal/trilha-principal';
import { MinicursosPage } from '../pages/minicursos/minicursos';
import { WicsiPage } from '../pages/wicsi/wicsi';
import { CtdsiPage } from '../pages/ctdsi/ctdsi';
import { EisiPage } from '../pages/eisi/eisi';
import { FesiPage } from '../pages/fesi/fesi';
import { GrandsiBrPage } from '../pages/grandsi-br/grandsi-br';
import { WtdsiPage } from '../pages/wtdsi/wtdsi';
import { CodesiiPage } from '../pages/codesii/codesii';
import { PrimeiroDiaPage } from '../pages/primeiro-dia/primeiro-dia';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = InicioPage;

  @ViewChild(Nav) public nav: Nav;
  
  menuItens = [
    {itemNome: '1º dia - 20/05', componente: PrimeiroDiaPage.name},
    {itemNome: 'Trilha Principal', componente: TrilhaPrincipalPage.name},
    {itemNome: 'Minicursos', componente: MinicursosPage.name},
    {itemNome: 'WICSI', componente: WicsiPage.name},
    {itemNome: 'CTDSI/CTCCSI', componente: CtdsiPage.name},
    {itemNome: 'EISI', componente: EisiPage.name},
    {itemNome: 'FESI', componente: FesiPage.name},
    {itemNome: 'GRANDSI-BR', componente: GrandsiBrPage.name},
    {itemNome: 'WTDSI', componente: WtdsiPage.name},
    {itemNome: 'CODESII', componente: CodesiiPage.name}
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

