import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-eisi',
  templateUrl: 'eisi.html',
})
export class EisiPage {
  public chamadas: Chamada[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Apresentação', conteudo: `O Encontro de Inovação em SI (EISI) é uma proposta do Simpósio Brasileiro de Sistemas de Informação (SBSI), com objetivo de possibilitar 
                                          o contato, discussão e alinhamento de visões entre os desafios e soluções inovadoras encontrados pela Comunidade Científica, pelo Governo, 
                                          pela Indústria e pela Sociedade. <br> 
                                          Nesta sexta edição do evento, o EISI terá como foco a inovação sob diferentes perspectivas - inovação de modelo de negócio, inovação de processo, 
                                          inovação tecnológica, inovação de produtos ou serviços e inovação organizacional. Por meio de palestras, oficinas, apresentações de cases e aplicações 
                                          de inovação e pitchs de empresas, o EISI pretende incentivar a interação e fomentar a discussão e trocas de experiências sobre esses diferentes temas. <br> 
                                          <b>Quem está convidado?</b> <br>
                                          Estimulamos a participação de empreendedores, empresários, startups, pesquisadores em geral, alunos e professores de cursos de Sistemas de Informação, 
                                          representantes de instituições governamentais ou órgãos públicos e todos aqueles apaixonados por inovação e empreendedorismo a submeterem seus trabalhos, 
                                          se inscreverem para participar do evento e contribuir com as discussões. <br>
                                          <b>Quais são os tipos de submissão?</b> <br>
                                          O EISI deste ano abrirá espaço para pesquisadores, startups, empreendedores, empresas e instituições científicas e tecnológicas apresentarem: <br>
                                          - <b>Cases em Inovação:</b> negócios ou produtos inovadores em que já existam resultados; <br>
                                          - <b>Pitches:</b> proposições de criação de novos negócios ou produtos; <br>
                                          - <b>Aplicações:</b> aplicações inovadoras da Comunidade Científica, Governo, Indústria ou Sociedade em geral. `},

      {header: 'Como Será A Seleção dos Trabalhos?', conteudo: `<b>Cases em Inovação:</b> Para selecionar os cases mais inovadores, o Comitê Técnico irá considerar a aderência ao tema central do evento 
                                                                - Inovação sob Diferentes Perspectivas - originalidade, ineditismo, replicabilidade, impacto, resultados e clareza do texto de apresentação. 
                                                                Os trabalhos selecionados serão apresentados e discutidos como parte do evento; <br>
                                                                <b>Pitches:</b> Para as proposições inovadoras serão selecionados os modelos de negócio considerando a oportunidade, o mercado, o canvas, os 
                                                                diferenciais, a solução e a equipe. Os modelos de negócio selecionados serão apresentados através de pitchs de 05 minutos à banca de especialistas, 
                                                                que oferecerá feedbacks aos participantes, como parte do evento; <br>
                                                                <b>Aplicações:</b> Serão selecionadas aplicações que explicitem aspectos de inovação pela Comunidade Científica, pelo Governo, pela Indústria ou 
                                                                pela Sociedade. <br>
                                                                Em todos os casos, as propostas serão avaliadas principalmente do ponto de vista de seu potencial para inovação, o potencial interesse das empresas 
                                                                e do mercado; seu alinhamento com a área de Sistemas de Informação; a clareza de sua descrição; e a experiência da equipe proponente com a área de 
                                                                pesquisa.`},

      {header: 'Instruções para Submissão', conteudo: `<b>Instruções para Submissão de Case de Inovação e Pitch</b> <br>
                                                      Alguns aspectos devem ser observados durante a submissão dos trabalhos: <br>
                                                      - Serão aceitas submissões em Português ou Inglês. <br>
                                                      - As submissões devem seguir o modelo <a href="https://portal.unit.br/sbsi/docs/EISI_2019_case.doc">Case de Inovação</a> ou <a href="https://portal.unit.br/sbsi/docs/EISI_2019_pitch.doc">Pitch</a> ou definido no artigo de submissão de aplicações descrito a seguir; <br>
                                                      - Apenas serão aceitas propostas submetidas em PDF e respeitando o limite máximo de 04 páginas; <br>
                                                      - As submissões devem ser feitas pelo <a href="https://jems.sbc.org.br/home.cgi?c=3206">sistema JEMS da SBC</a>; <br>
                                                      - Serão desconsideradas as submissões em formato diferente do PDF, que excederem o número máximo de páginas ou que violem as instruções de formatação. <br>
                                                      <b>Instrução para Submissão de Aplicações</b> <br>
                                                      - Um artigo curto (4 páginas) deve explicitar o aspecto inovador e o processo que auxiliou a alcançar a inovação da aplicação. Este processo pode incluir, 
                                                      por exemplo: (i) a ideia; (ii) pesquisa (para embasamento e motivação da inovação); (iii) engenharia de construção e produção; e (iv) comercialização de um 
                                                      novo produto; <br>
                                                      - O artigo deve ser original, apresentar aplicação inovadora ou com extensão significante de aplicações previamente apresentadas. No último caso, deve-se 
                                                      apresentar, de forma clara, evidências do valor adicionado na versão anterior da aplicação, por exemplo, pela descrição das funcionalidades da aplicação 
                                                      e/ou sua adaptação para novas aplicações práticas. Em outras palavras, o aspecto inovador deve estar presente; <br>
                                                      -	O artigo deve conter as seguintes seções e não ultrapassar mais do que 4 páginas em formato PDF aderente ao formato de artigos da 
                                                      <a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos">SBC</a>: <br> 
                                                      - Título, autor e afiliação; <br>
                                                      - Resumo: uma breve descrição da aplicação, apresentando também como os participantes do evento se beneficiarão de assistir a apresentação da aplicação e 
                                                      a qual audiência a aplicação pode trazer maior interesse; <br>
                                                      - Texto: significância para inovação em Sistemas de Informação, incluindo, por exemplo: <br>
                                                      &nbsp; &nbsp;&nbsp;- Contextualizar em relação à capacidade de inovação/intervenção; <br>
                                                      &nbsp; &nbsp;&nbsp;- Principais funcionalidades; <br>
                                                      &nbsp; &nbsp;&nbsp;- Cenário problema tratado pela solução, seu impacto neste cenário ou potencial para ter impacto; <br>
                                                      &nbsp; &nbsp;&nbsp;- Se aplicável, apresentar breve descrição dos estudos de caso realizados usando a aplicação, provendo escalabilidade de dados ou links 
                                                      indicando onde leitores podem encontrar informações sobre estudos de caso; <br>
                                                      &nbsp; &nbsp;&nbsp;- Se gerou patentes/registro/propriedade intelectual; <br>
                                                      &nbsp; &nbsp;&nbsp;- Potencial de exploração no mercado. <br>
                                                      - Maturidade: informação apresentando a maturidade, complexidade e robustez da aplicação (por exemplo, disponibilidade da aplicação, lista de funcionalidades, 
                                                        casos de uso apoiados, número e tipos de usuários etc.); <br>
                                                      - Vídeo: incluir link para vídeo que demonstre a aplicação, preferencialmente contendo explicações em áudio, com no máximo 20 minuto; <br> 
                                                      Link: se aplicável, incluir link para página web de onde se possa fazer o download da aplicação.`},

      {header: 'Datas Importantes', conteudo: `- Deadline da submissão: 11 de fevereiro de 2019; <br>
                                              - Notificação dos autores: 22 de março de 2019; <br>
                                              - Envio da Versão final: 29 de março de 2019`},

      {header: 'Coordenação', conteudo: `Leonardo Guerreiro Azevedo (IBM) - lga[at]br[dot]ibm[dot]com; <br>
                                        Methanias Colaço Junior (UFS) - mjrse[at]hotmail[dot]com; <br>
                                        Fabio Santos Batista (UNIT) - fabio_bastista[at]unit[dot]br `}
    ]
  }
}
