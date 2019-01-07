import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada'

/**
 * Generated class for the TrilhaPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trilha-principal',
  templateUrl: 'trilha-principal.html',
})
export class TrilhaPrincipalPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'SBSI', conteudo: 'A área de pesquisa em Sistemas de Informação (SI) busca compreender a Computação como meio ou instrumento para a solução de problemas do mundo real, da sociedade e das organizações. O Simpósio Brasileiro de Sistemas de Informação (SBSI) é o encontro anual da comunidade de SI da Sociedade Brasileira de Computação (SBC), constituindo-se em um evento para a apresentação de trabalhos científicos e discussão de temas contemporâneos na área de Sistemas de Informação, aproximando estudantes, pesquisadores, profissionais e empresários da comunidade de Sistemas de Informação. Em sua 15ª edição, o SBSI 2019  ocorrerá na cidade de Aracaju em Sergipe, sob a coordenação do ITP (Instituto de Tecnologia e Pesquisa) e da área de computação da Universidade Tiradentes (UNIT) e terá como temática "A Complexidade nos Sistemas de Informação Modernos". Considerando que os sistemas de informação exercem um papel importante na ciência, na economia e na sociedade, nos mais variados domínios de aplicação, a noção de complexidade se torna fundamental para sua concepção e manutenção. Tal complexidade advém das diferentes dimensões envolvidas na engenharia e gestão de sistemas de informação, não apenas técnica, mas também social e de negócio. Nesse contexto, diversos recursos e processos envolvidos no ciclo de vida desses sistemas, bem como a interação com outros sistemas, atores e artefatos. Serão discutidos os avanços e as perspectivas na área de SI considerando toda a sua complexidade e aplicações nos mais variados domínios relacionados à engenharia de sistemas complexos. Exemplos desses tipos de sistemas são os ecossistemas de software e os sistemas-de-sistemas, alvos de crescente investigação na última década, com discussão de casos reais e de problemas enfrentados pela pesquisa em SI. São esperados artigos técnicos que apresentem claramente novas contribuições para a pesquisa, relatos de experiência na indústria, educação em SI e estudos de caso, todos na grande área de Sistemas de Informação e que estejam relacionados aos diversos tópicos de interesse do simpósio. Em especial, convidamos a comunidade para se posicionar sobre a temática central do evento "A Complexidade nos Sistemas de Informação Modernos".'},
      {header: 'Datas Importantes', conteudo: '- Registro de artigos: 22 de outubro 19 de novembro de 2018 </br>- Submissão de artigos (ficha resumo e artigo): 29 de outubro 19 de novembro de 2018* </br>- 1ª etapa de avaliação (ficha resumo) - Notificação aos Autores: 14 de dezembro de 2018 </br>- 2ª etapa de avaliação (artigo) - Notificação aos Autores: 22 de fevereiro de 2019 </br>- Entrega da Versão Final: 01 de março de 2019 </br>- Realização do SBSI 2018: 20 a 24 de maio de 2019 </br>* Importante observar que os eventos não integrantes da trilha principal têm datas de submissão distintas.'}
    ]

    /*this.chamadas = [
      {header: 'SBSI', conteudo: 'bla bla bla'},
      {header: 'Datas Importantes', conteudo: 'ble ble ble'}
    ]*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrilhaPrincipalPage');
  }

}
