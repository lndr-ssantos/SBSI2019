import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '../../modelos/chamada';

/**
 * Generated class for the WtdsiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wtdsi',
  templateUrl: 'wtdsi.html',
})
export class WtdsiPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Apresentação', conteudo: `O Workshop de Teses e Dissertações em Sistemas de Informação (WTDSI) é um fórum dedicado à apresentação e 
                                          discussão de trabalhos de mestrado e de doutorado em Sistemas de Informação, desenvolvidos nos programas de 
                                          pós-graduação no Brasil. O seu objetivo é propiciar um ambiente construtivo para discussões, em que os alunos 
                                          possam ter uma avaliação dos seus trabalhos por pesquisadores experientes em Sistemas de Informação. <br>
                                          Os participantes terão acesso a um panorama representativo da pesquisa em Sistemas de Informação no país, 
                                          estimulando a integração e a cooperação de pesquisadores nessa área e oferecendo maior visibilidade às 
                                          pesquisas em andamento para as comunidades acadêmica e industrial. <br>
                                          Devem ser submetidos trabalhos que versem sobre pesquisas em andamento. Pesquisas concluídas ou em fase 
                                          de conclusão não serão aceitas. `},

      {header: 'Instruções para Submissão', conteudo: `Os autores deverão submeter dois documentos: <br>
                                                      
                                                      1. Ficha de Pesquisa, contendo uma descrição sucinta dos principais aspectos do trabalho com 
                                                      no máximo 2 (duas) páginas, utilizando a <a href="https://portal.unit.br/sbsi/docs/WTDSI_2019_ficha_de_pesquisa.doc">Ficha de Pesquisa do WTDSI</a>. <br>
                                                      
                                                      2. Artigo (resumo estendido) contendo, no máximo 4 (quatro) páginas para trabalhos de Mestrado 
                                                      e, no máximo, 6 (seis) páginas para trabalhos de Doutorado. Todos devem estar no formato do 
                                                      Modelo para Publicação de Artigos da <a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos">SBC</a>. <br>
                                                      
                                                      O artigo deve indicar, de forma clara, a natureza da sua contribuição e os problemas, domínios 
                                                      ou ambientes em que se aplicam. Sugere-se a seguinte estrutura para o artigo: Introdução, Apresentação 
                                                      do problema, Proposta de solução, Projeto de avaliação da solução, Atividades já realizadas e Considerações Finais. <br>

                                                      Os artigos e as fichas de pesquisa podem ser escritos em Português ou Inglês. Os 2 arquivos (Ficha + Artigo) 
                                                      devem estar em formato PDF. Serão desconsideradas as submissões em formato diferente de PDF, que excedam o número 
                                                      de páginas ou que violem as instruções de formatação. As submissões devem ser feitas pela trilha "SBSI 2019 - WTDSI" 
                                                      no <a href="https://submissoes.sbc.org.br/home.cgi?c=3202">sistema JEMS da SBC</a>.`},

      {header: 'Apresentação e Publicação', conteudo: `Os artigos aceitos serão publicados em seção específica dos Anais do SBSI 2019, condicionados à inscrição (tipo "Estudante 
                                                      de Pós-Graduação" ou "Efetivo", caso também tenha um artigo aceito no SBSI 2019) e à apresentação do aluno. <br>

                                                      Os trabalhos selecionados deverão ser apresentados pelos alunos durante o Workshop. Nesta ocasião, receberão opiniões e 
                                                      críticas construtivas de um Corpo Convidado de Debatedores, composto por pesquisadores da área de Sistemas de Informação, 
                                                      bem como da comunidade presente. <br>

                                                      Espera-se a participação ativa e a integração entre alunos e professores, de forma a delinear áreas de atuação para trabalhos 
                                                      futuros. Também é esperado que os estudantes interajam entre si e com os pesquisadores presentes, assistam apresentações de 
                                                      artigos e palestras, bem como participem das demais atividades do simpósio.`},

      {header: 'Tópicos de Interesse', conteudo: `Os tópicos sugeridos para trabalhos submetidos ao WTDSI 2019 são os mesmos da trilha regular do SBSI 2019. Além disso, são 
                                                  esperadas contribuições que abordem o tema principal do evento, "A Complexidade nos Sistemas de Informação Modernos", 
                                                  bem como os temas dos Grandes Desafios de pesquisa em SI definidos pela comunidade de pesquisa em Sistemas de Informação. 
                                                  <a href="http://www2.sbc.org.br/ce-si/arquivos/GranDSI-BR_Ebook-Final.pdf">Clique aqui para acessar o E-Book</a>.`},
      
      {header: 'Datas Importantes', conteudo: `•	Submissão de Trabalhos: 11 de fevereiro de 2019; <br>
                                                •	Notificação dos Autores: 22 de março de 2019; <br>
                                                •	Entrega da Versão Final: 29 de março de 2019`},

      {header: 'Coordenação', conteudo: `Clodis Boscarioli (Unioeste) – boscarioli[at]gmail[dot]com; <br>
                                          Rafael Oliveira Vasconcelos (UNIT) – Rafael[dot]oliveira[at]souunit[dot]com[dot]br`}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WtdsiPage');
  }

}
