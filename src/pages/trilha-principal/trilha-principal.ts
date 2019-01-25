import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada'

@IonicPage()
@Component({
  selector: 'page-trilha-principal',
  templateUrl: 'trilha-principal.html',
})
export class TrilhaPrincipalPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'SBSI', conteudo: `<div align="justify">A área de pesquisa em Sistemas de Informação (SI) busca compreender a Computação como meio ou instrumento para a
                                  solução de problemas do mundo real, da sociedade e das organizações. O Simpósio Brasileiro de Sistemas de Informação
                                  (SBSI) é o encontro anual da comunidade de SI da Sociedade Brasileira de Computação (SBC), constituindo-se em um evento para a apresentação
                                  de trabalhos científicos e discussão de temas contemporâneos na área de Sistemas de Informação, aproximando estudantes, pesquisadores, profissionais
                                  e empresários da comunidade de Sistemas de Informação. Em sua 15ª edição, o SBSI 2019  ocorrerá na cidade de Aracaju em Sergipe, 
                                  sob a coordenação do ITP (Instituto de Tecnologia e Pesquisa) e da área de computação da Universidade Tiradentes (UNIT) e terá como 
                                  temática "A Complexidade nos Sistemas de Informação Modernos". Considerando que os sistemas de informação exercem um papel importante na ciência,
                                  na economia e na sociedade, nos mais variados domínios de aplicação, a noção de complexidade se torna fundamental para sua concepção e manutenção.
                                  Tal complexidade advém das diferentes dimensões envolvidas na engenharia e gestão de sistemas de informação, não apenas técnica, mas também social
                                  e de negócio. Nesse contexto, diversos recursos e processos envolvidos no ciclo de vida desses sistemas, bem como a interação com outros sistemas,
                                  atores e artefatos. Serão discutidos os avanços e as perspectivas na área de SI considerando toda a sua complexidade e aplicações nos mais variados
                                  domínios relacionados à engenharia de sistemas complexos. Exemplos desses tipos de sistemas são os ecossistemas de software e os sistemas-de-sistemas,
                                  alvos de crescente investigação na última década, com discussão de casos reais e de problemas enfrentados pela pesquisa em SI. São esperados artigos técnicos
                                  que apresentem claramente novas contribuições para a pesquisa, relatos de experiência na indústria, educação em SI e estudos de caso, todos na grande
                                  área de Sistemas de Informação e que estejam relacionados aos diversos tópicos de interesse do simpósio. Em especial, convidamos a comunidade para se posicionar
                                  sobre a temática central do evento "A Complexidade nos Sistemas de Informação Modernos".</div>`},
      
      {header: 'Datas Importantes', conteudo: `- Registro de artigos: 22 de outubro 19 de novembro de 2018 <br>
                                                - Submissão de artigos (ficha resumo e artigo): 29 de outubro 19 de novembro de 2018* <br>
                                                - 1ª etapa de avaliação (ficha resumo) - Notificação aos Autores: 14 de dezembro de 2018 <br>
                                                - 2ª etapa de avaliação (artigo) - Notificação aos Autores: 22 de fevereiro de 2019 <br>
                                                - Entrega da Versão Final: 01 de março de 2019 <br>
                                                - Realização do SBSI 2018: 20 a 24 de maio de 2019 <br>
                                                * Importante observar que os eventos não integrantes da trilha principal têm datas de submissão distintas.`},

      {header: 'Tópicos de Interesse', conteudo: `São esperadas contribuições que abordem o tema principal do evento, "A Complexidade nos Sistemas de
                                                  Informação Modernos", bem como os grandes temas de desafios da pesquisa em SI definidos pela comunidade de pesquisa 
                                                  em Sistemas de Informação (vide <a href="http://www2.sbc.org.br/ce-si//arquivos/GranDSI-BR_Ebook-Final.pdf">www2.sbc.org.br/ce-si//arquivos/GranDSI-BR_Ebook-Final.pdf</a>): <br>
                                                  1. Sistemas-de-Sistemas de Informação <br>
                                                  2. SI no Mundo Aberto <br>
                                                  3. Complexidade de Sistemas de Informação <br>
                                                  4. Visão sociotécnica de Sistemas de Informação <br><br>
                                                    
                                                  Outros tópicos são também esperados, mas não limitados a:<br><br> 
                                                    
                                                  - Arquitetura orientada a serviços (SOA) e serviços Web <br>
                                                  - Aspectos humanos e sociais em SI <br>
                                                  - Business Intelligence & Analytics <br>
                                                  - Computação móvel, ubíqua e Internet das coisas em SI <br>
                                                  - Dados abertos e conectados, sistemas abertos <br>
                                                  - Educação de/em SI <br>
                                                  - Ecossistemas de Software e de SI <br>
                                                  - Sistemas-de-Sistemas e de SI <br>
                                                  - Gestão de conhecimento e aprendizagem organizacional <br>
                                                  - Gestão de pessoas em SI <br>
                                                  - Gestão de processos em SI (metodologias de gestão, repositórios de processos, modelagem de processos, 
                                                    social BPM, processos intensivos em conhecimento, adaptação de processos, processos sensíveis a contexto) <br>
                                                  - Governança empresarial e de TI <br>
                                                  - Inovação com/em SI <br>
                                                  - Integração de informações e de aplicações <br>
                                                  - Interação Humano-Computador em SI <br>
                                                  - Metodologias e abordagens para engenharia de SI <br>
                                                  - Mídias sociais em negócios e sociedade <br>
                                                  - Modelagem e paradigmas de desenvolvimento de SI (dados, sistemas/aplicações, agentes, aspectos, componentes, métodos ágeis etc.) <br>
                                                  - Pesquisa operacional e modelos de decisão em negócios <br>
                                                  - Planejamento estratégico de sistemas e TI <br>
                                                  - Preservação de informação e memória digital <br>
                                                  - Qualidade de SI <br>
                                                  - Representação de informações de negócio, gerência de dados e metadados nas organizações, ontologias <br>
                                                  - Segurança de/em SI <br>
                                                  - SI inteligentes (agentes inteligentes, algoritmos genéticos, aprendizagem de máquina, mineração de dados, modelos formais, ontologias, raciocínio automatizado, redes neurais, representação de conhecimento) <br>
                                                  - SI para governo (transparência, dados abertos, interoperabilidade, ecossistemas governamentais) <br>
                                                  - Sistemas de apoio à decisão `},
      
      {header: 'Instruções para Submissão', conteudo: `Os artigos podem ser submetidos para o SBSI 2019 somente na categoria "artigo completo" (full paper) sobre trabalhos de pesquisas já concluídas, com ideias e resultados inovadores, e seguindo metodologia científica adequada. Devem ter entre 7 e 8 páginas (incluindo as figuras, tabelas, diagramas, referências e anexos). 
                                                        Além do artigo, os autores deverão enviar uma ficha resumo descritiva do trabalho de no máximo 2 páginas. Essa ficha será utilizada na primeira etapa de avaliação e determinará se o artigo terá sua submissão aceita para avaliação ou não (o modelo estará disponível no site do SBSI 2019, mas pode ser acessado em: <a href="docs/ficha-submissao-sbsi-2019.doc">ficha-submissao-sbsi-2019</a>). <br>
                                                        Alguns aspectos adicionais devem ser observados: <br>
                                                        - Sugere-se que os artigos descrevam claramente a metodologia científica empregada e uma análise dos resultados, ressaltando as contribuições de pesquisa e inovação em SI e para a área de aplicação, posicionando-a em relação a outros trabalhos da área. <br>
                                                        - Todos os artigos podem ser submetidos em Português ou Inglês, em formato PDF e seguindo o modelo para publicação de artigos da ACM - ACM SIG Proceedings Templates (o modelo está disponível em: https://www.acm.org/publications/proceedings-template). As submissões devem ser  
                                                        feitas na plataforma JEMS da SBC. <br><br>
                                                        
                                                        <a href="https://jems.sbc.org.br/home.cgi?c=3200">Submissão - Jems</a><br><br>

                                                        - Submissões em inglês são recomendadas. Artigos escritos em Português devem conter também título equivalente em inglês e abstract. <br>
                                                        - Os trabalhos submetidos não devem ter sido publicados e nem estarem em processo de avaliação ou edição para publicação em outro lugar. <br> 
                                                        - Na versão de submissão do artigo, O CABEÇALHO DO TEXTO NÃO DEVERÁ HAVER NENHUM TIPO DE IDENTIFICAÇÃO DOS AUTORES. Além de eliminar a identificação dos autores do cabeçalho do artigo, toda e qualquer referência que identifique a proveniência do artigo deve ser removida da versão de submissão, como nome de projetos, de instituições, de ferramentas e citações de artigos que identifiquem os autores. Artigos que possuírem identificação nesta etapa serão rejeitados. Caso o artigo seja aceito, os autores deverão incluir na versão final seus dados (nomes, filiações e e-mails, bem como demais informações necessárias ao artigo, a exemplo de citações a outros trabalhos dos autores). <br>
                                                        - A seleção de trabalhos será realizada a partir da revisão por membros do Comitê de Programa do SBSI. O processo de revisão será conduzido de forma duplamente anônima (double-blind review). <br>
                                                        - Na primeira etapa de avaliação, serão avaliadas as fichas resumo. Para os trabalhos aprovados nesta etapa, serão avaliados os respectivos artigos na segunda etapa. Os seguintes critérios serão considerados na avaliação: adequação ao escopo do SBSI, revisão bibliográfica, metodologia científica, contribuição para a área de Sistemas de Informação, originalidade e clareza. <br><br>
                                                        
                                                        <b>Publicação</b> <br><br>
                                                        
                                                        Os artigos aceitos serão publicados nos anais do evento, condicionados à inscrição (e apresentação presencial durante o evento), na categoria profissional, de, pelo menos, um dos autores no evento. Os sócios da SBC devem estar em dia com a anuidade para terem direito aos valores reduzidos. <br>
                                                        Os autores dos melhores artigos do SBSI 2019 serão convidados a submeterem versões estendidas de seus artigos para a iSys - Revista Brasileira de Sistemas de Informação. <br>
                                                        Os artigos de edições passadas do SBSI estão disponíveis no site da Comissão Especial de Sistemas de Informação - CESI, da Sociedade Brasileira de Computação - SBC. Convidamos os autores a visitarem a biblioteca com o objetivo de encontrar possíveis trabalhos relacionados (<a href="http://www2.sbc.org.br/ce-si//">http://www.sbc.org.br/ce-si/</a>). Outra fonte recomendada é a iSys - Revista Brasileira de Sistemas de Informação (<a href="http://seer.unirio.br/index.php/isys">http://seer.unirio.br/index.php/isys</a>), bem outros periódicos e eventos científicos da área de Sistemas de Informação, como os indicados na ficha resumo. `},

      {header: 'Organização', conteudo: `Rodrigo Santos (UNIRIO) e Davi Viana (UFMA) <br>
                                          Coordenadores do Comitê de Programa do SBSI 2019 <br> <br>
                                          
                                          Scheila de Ávila e Silva (UCS) <br>
                                          Coordenadora de Publicações do SBSI 2019 <br><br>
                                          
                                          Fábio Rocha (UNIT) e Igor Vasconcelos (UNIT) <br>
                                          Organizadores Locais do SBSI 2019 `}
    ]
  }
}
