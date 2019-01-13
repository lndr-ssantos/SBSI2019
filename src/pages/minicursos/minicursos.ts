import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '../../modelos/chamada';

/**
 * Generated class for the MinicursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minicursos',
  templateUrl: 'minicursos.html',
})
export class MinicursosPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Minicursos', conteudo: `Minicursos são eventos de curta duração que visam apresentar uma visão geral de um tópico de pesquisa ou tecnologia que seja de interesse da comunidade de 
                                        Sistemas de Informação, de forma que o ouvinte tenha a oportunidade de aprender sobre um novo assunto vinculado à sua área de atuação, e também de extrair elementos 
                                        para serem aplicados em sua pesquisa e/ou prática. <br>
                                        Convidamos então a comunidade à proposição de minicursos para a décima quinta edição do Simpósio Brasileiro de Sistemas de Informação (SBSI 2019). 
                                        Os minicursos poderão ser introdutórios ou avançados, e deverão estar relacionados aos tópicos de interesse do simpósio. <br><br>
                                        
                                        Registro de propostas: 22 de outubro 19 de novembro de 2018 <br>
                                        Submissão de propostas (artigo de 4 páginas):29 de outubro 19 de novembro de 2018* <br>
                                        1ª etapa de avaliação (proposta) - Notificação aos Autores: 14 de dezembro de 2018 <br>
                                        Submissão do texto completo (capítulo): 03 de fevereiro de 2019* <br>
                                        2ª etapa de avaliação (texto completo) - Notificação aos Autores: 01 de março de 2019 <br>
                                        Entrega da Versão Final: 18 de março de 2019 <br>
                                        Entrega dos Slides: 15 de abril de 2019 <br>
                                        Realização do SBSI 2019: 20 a 24 de maio de 2019** <br><br>
                                        
                                        Os autores deverão entregar os textos a serem incluídos no livro até a data estabelecida no cronograma. Na segunda etapa de avaliação do texto completo (capítulo), pelo menos dois pesquisadores em SI farão a revisão, 
                                        a qual levará em consideração os seguintes critérios: aderência à proposta inicial do minicurso e ao formato solicitado, qualidade técnica do texto, da escrita, da sua estrutura, das figuras, tabelas e resumo. Textos que não 
                                        atendam a esses critérios, e que não possam ser corrigidos em função da data de publicação, serão rejeitados. <br>
                                        
                                        Em caso de dúvidas, entre em contato com a Coordenação de Minicursos do SBSI 2019:<br>
                                        José Maria David (UFJF) - jose[dot]david[at]ufjf[dot]edu[dot]br <br>
                                        Pablo Marques Menezes (UNIT) – pmenezes[dot]aju[at]gmail[dot]com `},
      
      {header: 'Escopo e Público-Alvo', conteudo: `Os minicursos a serem apresentados no SBSI 2019 têm como público-alvo: estudantes de graduação, estudantes de pós-graduação, profissionais da indústria, alunos do ensino médio, docentes na área de 
                                                    Sistemas de Informação, e podem cobrir tanto conceitos e aspectos fundamentais como tecnologias emergentes em Sistemas de Informação. <br>
                                                    Os minicursos deverão estar relacionados aos tópicos de interesse do simpósio, e será dada preferência a minicursos no tema do SBSI 2019: "<b>A Complexidade nos Sistemas de Informação Modernos</b>". 
                                                    Também será dada preferência a minicursos com caráter mais prático, que, em suas propostas, destaquem estratégias para torná-los mais dinâmicos e para fomentar a interação entre instrutores e estudantes. 
                                                    O objetivo é evitar que os minicursos sejam baseados apenas em estratégias expositivas.`},
      
      {header: 'Submissão de Propostas', conteudo: `As propostas de minicursos deverão ser enviadas eletronicamente através da Trilha “SBSI 2019 – Minicursos" na plataforma JEMS. 
                                                    As submissões dos minicursos ocorrerão em duas fases. Na primeira fase, uma proposta do minicurso deverá ser apresentada para avaliação e, na segunda fase, o conteúdo do minicurso deverá ser submetido (texto e slides). 
                                                    <a href="https://jems.sbc.org.br/home.cgi?c=3200"Submissão - Jems</`},
                                            
      {header: 'Formato', conteudo: `Na primeira fase, a proposta do minicurso deverá ser escrita em Português ou Inglês e ter no máximo 4 páginas (formato de artigos da SBC), incluindo as seguintes informações: <br>
                                      - Título, autores e filiação do(s) autor(es); <br>
                                      - Resumo com no máximo 200 palavras; <br>
                                      - Descrição incluindo objetivos e requisitos técnicos (equipamento e “software"), indicando o escopo (introdutório ou avançado); <br>
                                      - Metodologia/abordagem didática a ser empregada; <br>
                                      - Tempo para a realização do minicurso (4 horas); <br>
                                      - Relevância para o SBSI 2019; <br>
                                      - Esboço contendo os tópicos principais e o conteúdo programático; <br>
                                      - Referências bibliográficas principais; <br>
                                      - Idioma em que será ministrado (Português ou Inglês); <br>
                                      - Biografia curta do(s) autor(es). <br>
                                      Cada minicurso selecionado deverá ter como versão final um texto que será publicado como capítulo de um livro online, no formato de artigos da SBC: de 20 a 30 páginas, 
                                      para minicursos com duração de quatro horas. Capítulos em português também devem conter título e resumo em inglês. Os autores deverão autorizar a publicação do resumo do 
                                      minicurso no website do evento. Os slides serão disponibilizados em mídias digitais juntamente com os Anais do evento e/ou no website. <br>
                                      Tradicionalmente, o SBSI tem conseguido financiar o transporte (dentro do Brasil) e hospedagem de um dos autores dos minicursos aceitos. A organização tentará viabilizar este 
                                      apoio novamente nesta edição, embora seja responsabilidade inicial dos autores proponentes garantirem a sua inscrição e presença no evento.`},

      {header: 'Datas Importantes', conteudo: `Registro de propostas: 22 de outubro 19 de novembro de 2018 <br>
                                                Submissão de propostas (artigo de 4 páginas):29 de outubro 19 de novembro de 2018* <br>
                                                1ª etapa de avaliação (proposta) - Notificação aos Autores: 14 de dezembro de 2018 <br>
                                                Submissão do texto completo (capítulo): 03 de fevereiro de 2019* <br>
                                                2ª etapa de avaliação (texto completo) - Notificação aos Autores: 01 de março de 2019 <br>
                                                Entrega da Versão Final: 18 de março de 2019 <br>
                                                Entrega dos Slides: 15 de abril de 2019 <br>
                                                Realização do SBSI 2019: 20 a 24 de maio de 2019** <br>
                                                
                                                Os autores deverão entregar os textos a serem incluídos no livro até a data estabelecida no cronograma. Na segunda etapa de avaliação do texto 
                                                completo (capítulo), pelo menos dois pesquisadores em SI farão a revisão, a qual levará em consideração os seguintes critérios: aderência à proposta 
                                                inicial do minicurso e ao formato solicitado, qualidade técnica do texto, da escrita, da sua estrutura, das figuras, tabelas e resumo. Textos que não 
                                                atendam a esses critérios, e que não possam ser corrigidos em função da data de publicação, serão rejeitados.`},

      {header: 'Organização', conteudo: `Em caso de dúvidas, entre em contato com a Coordenação de Minicursos do SBSI 2019: <br>
                                        José Maria David (UFJF) - jose[dot]david[at]ufjf[dot]edu[dot]br <br>
                                        Pablo Marques Menezes (UNIT) – pmenezes[dot]aju[at]gmail[dot]com `}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinicursosPage');
  }

}
