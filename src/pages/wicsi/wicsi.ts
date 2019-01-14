import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

/**
 * Generated class for the WicsiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wicsi',
  templateUrl: 'wicsi.html',
})
export class WicsiPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Apresentação', conteudo: `O VI Workshop de Iniciação Científica em Sistemas de Informação (WICSI) é um evento nacional que 
                                          visa à divulgação de trabalhos de pesquisa em nível de Graduação na área de Sistemas de Informação (SI). 
                                          O objetivo do WICSI é incentivar o desenvolvimento de pesquisas de Iniciação Científica e, para tanto, 
                                          busca estimular os alunos de graduação com trabalhos de iniciação científica na área de SI a apresentar seus trabalhos 
                                          nos vários tópicos de interesses do SBSI. <br>
                                          O público alvo do WICSI são alunos de graduação que desejem apresentar seus trabalhos e projetos de pesquisa 
                                          em andamento ou recém-concluídos. Projetos de iniciação científica que foram concluídos em 2018 podem ser submetidos, 
                                          mesmo que o aluno tenha se formado no segundo semestre de 2018. <br> 
                                          A audiência deste workshop terá a oportunidade de participar de um importante fórum dedicado à apresentação e 
                                          discussão de pesquisas em andamento de estudantes de graduação na área de SI. A meta é estimular a integração entre 
                                          estudantes de graduação e alunos de pós-graduação, bem como membros da academia e da indústria, além de dar visibilidade 
                                          aos potenciais pesquisadores e profissionais junto à comunidade acadêmica e iniciativa privada. <br>
                                          O WICSI acontece como parte do Simpósio Brasileiro de Sistemas de Informação (SBSI), que é um evento voltado à apresentação de 
                                          trabalhos científicos e à discussão de temas relevantes na área de Sistemas de Informação, aproximando estudantes, pesquisadores, 
                                          profissionais e empresários que atuam na área. O programa do Simpósio inclui sessões técnicas, palestras convidadas, 
                                          minicursos, painéis e workshops. <br><br>
                                          
                                          Scheila de Avila e Silva (UCS) - sasilva6[at]ucs[dot]br <br>
                                          Adolfo Pinto Guimarães (UNIT) - adolfo[dot]pinto[at]souunit[dot]com[dot]br`},
      
      {header: 'Instruções para Submissão', conteudo: `Os artigos submetidos ao WICSI 2019 são limitados a 4 (quatro) páginas, incluindo resumo, figuras, tabelas e referências. Alguns aspectos adicionais devem ser observados: <br>
                                                      - Os artigos podem ser escritos em Português ou Inglês e devem ser enviados em formato PDF. No caso de artigos em Português, deve ser incluído o Abstract em inglês, além do Resumo; <br>
                                                      - O formato obrigatório do artigo é o Modelo para Publicação de Artigos da <a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos">SBC</a>; <br>
                                                      - O artigo deve indicar, de forma clara, a natureza da contribuição e os problemas, domínios ou ambientes em que se aplicam. Sugere-se a seguinte estrutura para o artigo: 
                                                      Introdução, Fundamentação Teórica, Metodologia de Pesquisa, Resultados e Conclusão. Os orientadores e co-orientadores também devem ser registrados como autores do artigo; <br> 
                                                      - A seleção de trabalhos será realizada a partir da revisão por membros do comitê de programa. O processo de revisão será conduzido de forma anônima (double-blind review) e 
                                                      qualquer proposta será analisada no mínimo por dois revisores. Assim, TODA e qualquer referência que identifique a proveniência do artigo (tais como nome dos autores, nome 
                                                      de projetos, de ferramentas e citações de artigos que identificam os autores) deve ser removida da versão de submissão e substituída por “removed for double-blind review". 
                                                      Estas informações deverão ser incluídas na versão final, caso o artigo seja aceito. <br> 
                                                      - As submissões devem ser feitas pelo <a href="https://submissoes.sbc.org.br/home.cgi?c=3203">sistema JEMS da SBC</a>. Serão desconsideradas as submissões em arquivos de formato diferente do PDF, artigos com identificação dos autores 
                                                      e aquelas que excederem o número máximo de páginas ou que violem as instruções de formatação.`},

      {header: 'Publicação de Trabalhos Aceitos', conteudo: `Os artigos aceitos serão publicados em seção específica dos anais do SBSI 2019, condicionados à 
                                                                            inscrição do estudante de graduação e apresentação do trabalho aceito. Os trabalhos selecionados 
                                                                            deverão ser apresentados durante o workshop, por meio de apresentação oral e/ou pôster, de 
                                                                            acordo com a avaliação final do comitê de programa.`},

      {header: 'Datas Importantes', conteudo: `Submissão de trabalhos: 11 de fevereiro de 2019 <br>
                                              Notificação aos Autores: 22 de março de 2019 <br>
                                              Entrega da Versão Final: 29 de março de 2019`},
                                          
      {header: 'Coordenação', conteudo: `Scheila de Avila e Silva (UCS) - sasilva6[at]ucs[dot]br <br>
                                          Adolfo Pinto Guimarães (UNIT) - adolfo[dot]pinto[at]souunit[dot]com[dot]br`}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WicsiPage');
  }

}
