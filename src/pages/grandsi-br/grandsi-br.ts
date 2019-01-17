import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '../../modelos/chamada';

/**
 * Generated class for the GrandsiBrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grandsi-br',
  templateUrl: 'grandsi-br.html',
})
export class GrandsiBrPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Apresentação', conteudo: `<b>Seminário de Acompanhamento</b> <br><br>

                                          Em 2016, a CE-SI (Comissão Especial de Sistemas de Informação) lançou a iniciativa do Seminário Grandes Desafios de Pesquisa 
                                          em Sistemas de Informação no Brasil – GranDSI-BR - com o objetivo de prospectar as questões de pesquisa na área de Sistemas de 
                                          Informação que serão importantes para a ciência e o país em um período de 10 anos (2016-2026). <br>
                                          Os resultados do GranDSI-BR foram publicados em um <a href="http://www2.sbc.org.br/ce-si/arquivos/GranDSI-BR_Ebook-Final.pdf">e-book</a> 
                                          organizado pela CE-SI e seus desafios serviram como base para diversas ações da comunidade de SI, incluindo chamadas de eventos e edições 
                                          especiais da <a href="">iSys - Revista Brasileira de Sistemas de Informação</a>. <br>
                                          Os Grandes Desafios da Pesquisa em Sistemas de Informação no Brasil (2016-2026) são: <br><br>
                                          
                                          <center>Sistemas de Sistemas de Informação
                                          Sistemas de Informação e o Mundo Aberto
                                          Complexidade de Sistemas de Informação
                                          Visão Sociotécnica de Sistemas de Informação</center> <br>
                                          
                                          Passados dois anos da publicação destes desafios, em 2019, durante o XV Simpósio Brasileiro de Sistemas de Informação, realizaremos o 
                                          <b>Seminário de Acompanhamento dos Grandes Desafios da Pesquisa em Sistemas de Informação</b> cujo objetivo é prospectar os avanços já 
                                          alcançados pela comunidade científica e pela comunidade de prática em Sistemas de Informação no Brasil em relação aos desafios estipulados. 
                                          Estes resultados serão apresentados e debatidos durante o XV SBSI em Aracaju. <br>
                                          Venha conhecer e contribuir para os avanços da área de SI aos nossos desafios de pesquisa até 2026! `},

      {header: 'Coordenação', conteudo: `Rita Suzana Pitangueira Maciel (UFBA) - ritasuzana[at]gmail[dot]com; <br>
                                        Renata Araujo (CE-SI/SBC) - rma[dot]renata[dot]araujo[at]gmail[dot]com; <br>
                                        Clodis Boscarioli (Unioeste) – boscarioli[at]gmail[dot]com`}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrandsiBrPage');
  }

}
