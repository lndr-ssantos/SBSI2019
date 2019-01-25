import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-ctdsi',
  templateUrl: 'ctdsi.html',
})
export class CtdsiPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Apresentação', conteudo: `O Concurso de Teses e Dissertações em Sistemas de Informação (CTDSI) e o Concurso de Trabalhos de Conclusão 
                                          de Curso em Sistemas de Informação (CTCCSI) do XV Simpósio Brasileiro de Sistemas de Informação (SBSI 2019) 
                                          são iniciativas da Comissão Especial de Sistemas de Informação (CESI) da Sociedade Brasileira de Computação (SBC) 
                                          que visa selecionar e premiar as três melhores teses de doutorado e dissertações de mestrado, bem como os três 
                                          melhores trabalhos de conclusão de curso de graduação da área de Sistemas de Informação, concluídos (i.e., 
                                          defendidos e aprovados) no ano de 2018.`},

      {header: 'Processo de Avaliação', conteudo: `A avaliação será conduzida em três fases: <br>
                                                  FASE 1: Na fase 1, os autores devem submeter, além do seu trabalho de conclusão de graduação, dissertação 
                                                  de mestrado ou tese de doutorado, um artigo resumindo seu trabalho (ver detalhes abaixo). Os artigos submetidos 
                                                  passarão por um processo de seleção, visando classificar os melhores trabalhos em cada categoria (tese de doutorado, 
                                                  dissertação de mestrado e Trabalho de Conclusão de Curso de Graduação). Cada artigo será avaliado por pelo menos 
                                                  três especialistas. É importante ressaltar que, na FASE 1, o que estará em julgamento não será o trabalho completo, 
                                                  mas apenas o artigo (que não precisa ser original). Os resumos dos artigos dos trabalhos classificados nessa primeira 
                                                  fase estarão automaticamente aceitos para publicação nos anais do SBSI 2019 de acordo com regras estabelecidas, descritas 
                                                  a seguir. Para o texto original (trabalho de conclusão, dissertação ou tese), deve ser mantido o formato original do trabalho 
                                                  (ver detalhes a seguir). <br><br> 
                                                  
                                                  FASE 2: Será realizada uma segunda avaliação, utilizando o texto completo de cada trabalho aceito na fase anterior, 
                                                  também por pelo menos três especialistas. O resultado dessa avaliação é usado para compor a nota da FASE 3, a ser 
                                                  utilizado com a avaliação da apresentação, e não será divulgado aos participantes. <br><br>
                                                  
                                                  FASE 3: Nessa fase, que ocorrerá durante o evento, o autor que defendeu o trabalho de conclusão de curso de graduação, 
                                                  de mestrado ou de doutorado (e somente ele) deverá fazer a apresentação oral do trabalho, em um tempo estipulado pela 
                                                  organização do evento, para uma banca, que avaliará a qualidade da apresentação e poderá fazer perguntas ao autor. Para 
                                                  o caso de TCC em grupo, a apresentação poderá ser feita por apenas um dos integrantes. A não participação nessa terceira 
                                                  fase implica em exclusão do processo. <br><br>
                                                  
                                                  
                                                  A comissão se reserva no direito de indicar apenas os trabalhos que ela considerar adequados a concorrerem à premiação, 
                                                  estando inclusive prevista a possibilidade de não haver trabalhos indicados para premiação em uma ou mais categorias. 
                                                  Ao final, a comissão organizadora do CTDSI e do CTCCSI coordenará internamente a consolidação das três fases e eventual 
                                                  discussão, envolvendo os integrantes do Comitê de Programa para determinação dos trabalhos premiados em cada categoria. 
                                                  O anúncio dos trabalhos premiados será feito na sessão de premiação do evento.`},

      {header: 'Certificados de Premiação', conteudo: `Os trabalhos premiados entre os finalistas receberão certificados de “Prêmio" no qual constará explicitamente a 
                                                        posição atingida e a categoria. Aos demais trabalhos finalistas, caberão certificados de “Menção Honrosa", nos 
                                                        quais constará apenas a categoria.`},

      {header: 'Formato de Submissão', conteudo: `Cada trabalho submetido deverá conter os seguintes arquivos (em formato PDF): <br>
                                                  1. Artigo de 8 (oito) a 10 (dez) páginas, no Modelo de Publicação de Artigos da <a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos">SBC</a>; <br>
                                                  2. Declaração (carta com assinatura dos autores e orientadores) indicando uma das seguintes opções: 
                                                  - Artigo Original (não publicado); <br>
                                                  - Artigo Publicado (ou aceito) em outro evento ou periódico. Neste caso, deve-se indicar qual veículo; <br>
                                                  - Artigo Submetido também para outro evento ou periódico (inclusive do SBSI 2019), mas ainda não aceito. Neste caso, deve-se indicar qual veículo. <br> 
                                                  3. Texto completo (TCC, Dissertação ou Tese); <br>
                                                  4. Declaração (carta, datada e assinada pelo coordenador do curso) de conclusão constando obrigatoriamente: <br>
                                                  - Dados do candidato, orientador, instituição, curso, título do trabalho; <br>
                                                  - Informação sobre a data em que a defesa ocorreu e o resultado (aprovação); <br>
                                                  - Instituição (tanto para tese, dissertação e TCC). <br><br>
                                                  
                                                  Formato do artigo a ser submetido na FASE 1: <br>
                                                  - Todos os arquivos solicitados deverão ser submetidos exclusivamente em formato eletrônico (PDF), por meio do sistema JEMS da SBC (<a href="https://jems.sbc.org.br/home.cgi?c=3204">CTDSI</a> e <a href="https://jems.sbc.org.br/home.cgi?c=3208">CTCCSI</a>); <br>
                                                  - O artigo deve ser escrito em português ou inglês, respeitando o limite máximo de 10 (paginas) páginas e o mínimo de 8 (oito) páginas; <br>
                                                  - O artigo deve deixar clara a contribuição do trabalho na área de Sistemas de Informação e a originalidade do tema; <br>
                                                  - O artigo deve obrigatoriamente seguir o Modelo de Publicação de Artigos da SBC; <br>
                                                  - A organização do artigo deve apresentar obrigatoriamente: título do trabalho, autor, instituição/departamento no qual foi aprovado, orientador e co-orientador(es) com as respectivas afiliações, resumo/abstract e texto; <br>
                                                  - As submissões que não estiverem finalizadas de acordo com os dados solicitados pelo JEMS e os arquivos correspondentes devidamente postados segundo as regras estabelecidas nesta chamada serão imediatamente rejeitadas e, portanto, não participarão da FASE 1; <br>
                                                  - Para os trabalhos aprovados na FASE 1, o artigo (ou resumo, caso o artigo não seja original) será publicado nos anais do CTDSI/CTCCSI 2019, desde que o autor principal do trabalho defendido (TCC, dissertação ou tese) efetive sua inscrição no evento. <br><br>
                                                  
                                                  Os artigos originais devem conter: <br>
                                                  - visão geral sobre o tema com definição dos objetivos do trabalho e relevância da pesquisa; <br>
                                                  - estado da arte/prática (trabalhos relacionados); <br>
                                                  - métodos científicos empregados (opcional para TCC); <br>
                                                  - descrição e discussão dos resultados obtidos; <br>
                                                  - conclusão com base nos resultados, relacionando-os aos objetivos do trabalho. <br><br>
                                                  
                                                  A publicação do artigo obedecerá às seguintes regras: <br>
                                                  - Se o artigo for original, será publicado o artigo completo; <br>
                                                  - Se o artigo não for original, ou seja, já tiver sido publicado em outro evento (inclusive do próprio SBSI), a versão a ser publicada nos anais do evento será um resumo (1 página) preparado pelos autores (versão final), indicando a referência completa do evento da outra publicação. `},
                                  
      {header: 'Datas Importantes', conteudo: `Submissão de Trabalhos (FASE 1): 11 de Fevereiro de 2019; <br>
                                              Notificação dos Autores (FASE 1): 22 de Março de 2019; <br>
                                              Entrega das Versões Finais: 29 de Março de 2019; <br>
                                              Nova Etapa de Avaliação (FASE 2): Abril de 2019; <br>
                                              Avaliação das Apresentações (FASE 3): Durante CTD-SI e CTCC-SI 2019; <br>
                                              Sessão de Premiação: Conforme Programação do SBSI 2019`},

      {header: 'Coordenação', conteudo: `Sean Siqueira (UNIRIO) - sean[at]uniriotec[dot]br; <br>
                                        Heitor Costa (UFLA) - heitor[at]dcc[dot]ufla[dot]br; <br>
                                        Flavia Bernardini (UFF) – fcbernardini[at]ic[dot]uff[dot]br`}
    ]
  }
}
