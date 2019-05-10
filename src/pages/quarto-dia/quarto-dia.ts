import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-quarto-dia',
  templateUrl: 'quarto-dia.html',
})
export class QuartoDiaPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Programação do Dia', conteudo: `09:00 - 10:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 6: Trilha Principal (Sessão Técnica 15) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 16) <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório do Bloco G - Painel do WQPSI <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: FESI <br><br>
                                                
                                                10:30 - 11:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break <br><br>
                                                
                                                11:00 - 12:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 6: Trilha Principal (Sessão Técnica 17) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 18) <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório do Bloco G - GranDSIBR (SBC) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: FESI <br><br>
                                                
                                                12:30 - 14:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Almoço <br><br>
                                                
                                                14:30 - 16:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 6: Trilha Principal (Sessão Técnica 19) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 20) <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório do Bloco G - Momento com Keynotes <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: FESI <br><br>
                                                
                                                16:00 - 16:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break <br><br>
                                                
                                                16:30 - 18:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório do Bloco G - Keynote Nacional Prof. Julio Leite <br><br>

                                                18:00 - 22:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório do Bloco G - Reunião da Comunidade de SI`},
                                      
      {header: 'Detalhes das Sessões Técnicas', conteudo: `<b>Sessão Técnica 15 (ST15) - Systems and Software Models:</b> <br>
                                                          <b>Chair:</b> Valdemar Graciano Neto (UFG) <br><br>
                                              
                                                          1 - A Domain-Sensitive Threshold Derivation Method <br>
                                                          &nbsp; &nbsp; &nbsp;- Allan Mori (UFMG), <br>
                                                          &nbsp; &nbsp; &nbsp;- Gustavo Vale (University of Passau), <br>
                                                          &nbsp; &nbsp; &nbsp;- Elder Cirilo (UFSJ), <br>
                                                          &nbsp; &nbsp; &nbsp;- Eduardo Figueiredo (UFMG) <br><br>

                                                          2 - .	Hermes: A Natural Language Interface Model for Software Transformation <br>
                                                          &nbsp; &nbsp; &nbsp;- Michael Chagas (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Kleinner Farias (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucian Gonçales (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucas Kupssinskü (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- João Gluz (IFRS) <br><br>

                                                          3 - Analyzing the Impact of Inter-smell Relations on Software Maintainability <br>	
                                                          &nbsp; &nbsp; &nbsp;- Júlio Martins (UFC), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Carla Bezerra (UFC), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Anderson Uchoa (PUC-Rio) <br> <br>
                                                          
                                                          <b>Sessão Técnica 16 (ST16) - Agile Methodologies:</b> <br>
                                                          <b>Chair:</b> Anna Beatriz Marques (UFC) <br><br>
                                                          
                                                          1 - An Agile Approach Applied to Intense Maintenance Projects <br>
                                                          &nbsp; &nbsp; &nbsp;- Gibeon Aquino Júnior, <br>
                                                          &nbsp; &nbsp; &nbsp;- Andre Dantas (UFRN) <br><br>
                                                          
                                                          2 - Towards an understanding of Value Creation in Agile Software Development <br>
                                                          &nbsp; &nbsp; &nbsp;- Geraldo Galindo Neto (UPE), <br>
                                                          &nbsp; &nbsp; &nbsp;- Wylliams Santos (UPE), <br>
                                                          &nbsp; &nbsp; &nbsp;- Roberta Fagundes (UPE), <br>
                                                          &nbsp; &nbsp; &nbsp;- Tiziana Margaria (University of Limerick & Lero)<br><br>

                                                          3 - Vulnerability detection techniques and tools and their relationship to agile methods and software quality and service models	<br>	
                                                          &nbsp; &nbsp; &nbsp;- Lígia Santos, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Edmir Prado, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Marcos Chaim (USP) <br><br>
                                                          
                                                          <b>Sessão Técnica 17 (ST17) - SOA and Databases:</b> <br>
                                                          <b>Chair:</b> Leonardo Azevedo (IBM) <br><br>
                                                          
                                                          1 - Semantic Enrichment of Services for Linked Data Provision in SOA <br>
                                                          &nbsp; &nbsp; &nbsp;- Bruno Oliveira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alexis Huf, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ivan Salvadori, <br>
                                                          &nbsp; &nbsp; &nbsp;- Frank Siqueira (UFSC) <br><br>
                                                          
                                                          2 - Polyflow: A SOA for Analyzing Workflow Heterogeneous Provenance Data in Distributed Environments <br>
                                                          &nbsp; &nbsp; &nbsp;- Yan Mendes (UFJF), <br>
                                                          &nbsp; &nbsp; &nbsp;- Regina Braga (UFJF), <br>
                                                          &nbsp; &nbsp; &nbsp;- Victor Ströele (UFJF),  <br>
                                                          &nbsp; &nbsp; &nbsp;- Daniel de Oliveira (UFF) <br><br>

                                                          3 - Duplicate Management Using Graph Database Systems: A Case Study <br>	
                                                          &nbsp; &nbsp; &nbsp;- Robinson Vaz (Controladoria Geral do Estado de Goiás), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Jones Oliveira (UFG), <br>
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Ribeiro (UFG) <br><br>
                                                          
                                                          <b>Sessão Técnica 18 (ST18) - Startups and Ecosystems:</b> <br>
                                                          <b>Chair:</b> José Maria David (UFJF) <br><br>
                                                          
                                                          1 - A Study on the Brazilian Public Software Portal Ecosystem Life Cycle and Collaboration <br>
                                                          &nbsp; &nbsp; &nbsp;- Vinicius Serva Pereira (UNIRIO), <br>
                                                          &nbsp; &nbsp; &nbsp;- Renata Araújo (Universidade Presbiteriana Mackenzie), <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Santos (UNIRIO) <br><br>
                                                          
                                                          2 - The Belo Horizonte Software Startups Ecosystem and its maturity <br>
                                                          &nbsp; &nbsp; &nbsp;- Pedro Almeida, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sandro Almeida (PUC Minas) <br><br>

                                                          3 - Software Startups Success Factors Study under the Entrepreneurial Perspective <br>	
                                                          &nbsp; &nbsp; &nbsp;- Tatiany Godoi (UFPR), <br> 
                                                          &nbsp; &nbsp; &nbsp;- André Menolli (UENP & UEL), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Gustavo Dionísio (UENP) <br><br>
                                                          
                                                          <b>Sessão Técnica 19 (ST19) - Information Systems and Applications:</b> <br>
                                                          <b>Chair:</b> Heitor Costa (UFLA) <br><br>
                                                          
                                                          1 - Exploring Deep Features and Transfer Learning for Plant Species Recognitio <br>
                                                          &nbsp; &nbsp; &nbsp;- Marcondes Feitoza, <br>
                                                          &nbsp; &nbsp; &nbsp;- Wanderson Silva, <br>
                                                          &nbsp; &nbsp; &nbsp;-  Rodrigo Calumby (UEFS) <br><br>
                                                          
                                                          2 - Impact analysis of model-based development in avionics software production <br>
                                                          &nbsp; &nbsp; &nbsp;- Gustavo Mottin, <br>
                                                          &nbsp; &nbsp; &nbsp;- Josiane Porto (UNISINOS) <br><br>

                                                          3 - An Intelligent System to Enhance the Productivity and Sustainability in Soybean Crop Enterprises <br>	
                                                          &nbsp; &nbsp; &nbsp;- Douglas Pereira (UTFPR), <br>
                                                          &nbsp; &nbsp; &nbsp;- Pedro Bugatti (UTFPR), <br>
                                                          &nbsp; &nbsp; &nbsp;- Fabrício Lopes (UTFPR), <br>
                                                          &nbsp; &nbsp; &nbsp;- André Souza (Belagrícola Comércio e Representação de Produtos Agrícolas LTDA), <br>
                                                          &nbsp; &nbsp; &nbsp;- Priscila Saito (UTFPR) <br><br>
                                                          
                                                          <b>Sessão Técnica 20 (ST20) - Information Systems and Society (1):</b> <br>
                                                          <b>Chair:</b> André Freire (UFLA) <br><br>
                                                          
                                                          1 - Semantic Enrichment of Web Data for the Provision of an Unified Data Repository of Brazilian Missing Persons <br>
                                                          &nbsp; &nbsp; &nbsp;- Jorão Gomes Junior, <br>
                                                          &nbsp; &nbsp; &nbsp;- Nicolas Ferranti, <br>
                                                          &nbsp; &nbsp; &nbsp;- Jairo Souza (UFJF) <br><br>
                                                          
                                                          2 - ICT Governance: A View of Adoption of Best Practices in Enterprises of State of Sergipe <br>
                                                          &nbsp; &nbsp; &nbsp;- Claudio Silva, <br>
                                                          &nbsp; &nbsp; &nbsp;- Quelita Ribeiro, <br>
                                                          &nbsp; &nbsp; &nbsp;- Michel Soares, <br>
                                                          &nbsp; &nbsp; &nbsp;-  Rogério Nascimento (UFS) <br><br>

                                                          3 - A Study on the Design Thinking Approach in Universities <br>	
                                                          &nbsp; &nbsp; &nbsp;- Edna Dias Canedo, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Frederico Almeida (UnB)`},

      {header: 'Keynote Nacional', conteudo: `<b>Um Novo Futuro para Sistemas de Informação: o desafio da consciência</b> <br><br>
      
                                              Os sistemas de informação computadorizados de apoio às organizações surgiram em meados de 1960 e evoluíram com o desenvolvimento 
                                              tecnológico. A característica particular dessa área de conhecimento era a junção do processamento de dados com teorias organizacionais. 
                                              O moto de que a informação é fundamental para a tomada de decisão justificou os enormes investimentos de adequação das organizações a 
                                              crescente automação da sociedade. Dessa maneira os sistemas de informação gerencias (SIG) passaram cada vez mais a ter que lidar com 
                                              contextos externos à organização, levando a uma constante mudança dos padrões organizacionais e das tecnologias de apoio. Novos nomes 
                                              surgiram: TI, TIC, IdC. A avalanche de mudanças, que, em software, Lehman chamou de sistemas do tipo E, caracteriza a essência evolutiva 
                                              desses sistemas. A visão funcional do que se deve fazer para atender ao cliente, hoje é acrescida da visão de qualidades que o sistema 
                                              deve possuir. Essas qualidades são desde daquelas relacionadas à tecnologia, como também das demandadas pela sociedade como um todo, 
                                              quer através de regulamentos explícitos ou padrões éticos vigentes. Nessa babel de inovação, a integridade dos sistemas está em constante 
                                              questionamento. Como encarar esse grande desafio? Sabendo-se da falácia da completeza, mesmo assim é importante saber que horizontes de 
                                              pesquisa podem ajudar a integridade dos sistemas. Nesse contexto, apresentamos o conceito de consciência, tanto interno como externo 
                                              aos sistemas de informação. Dessa maneira pretendemos abrir uma janela de oportunidade para pesquisas em sistemas que precisem estar 
                                              em constante evolução.`},

      {header: 'FESI', conteudo: `09:00 - 10:30 <br>
                                  <b>Oficina/Palestra "Construção de projetos pedagógicos a partir dos RFs de SI"</b> <br>
                                  Objetivos da oficina: Apresentar formas de utilização dos referenciais curriculares da SBC para adequação e 
                                  aperfeicoamento dos projetos pedagógicos dos bacharelados em Sistemas de Informação. <br>
                                  Ministrante: Alessandro Cerqueira (Univeritas/RJ) <br>
                                  Bacharel em Informática pelo IM/UFRJ (1993) e Mestre em Engenharia de Sistemas e Computação pela COPPE/UFRJ (1997). Atua como docente do ensino superior 
                                  desde 1999 e vem exercendo desde 2009 o cargo de Coordenador Acadêmico em cursos de Bacharelado em Sistemas de Informação, Bacharelado em Ciências da Computação, 
                                  Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (presencial e EaD), Superior de Tecnologia em Redes de Computadores (Presencial e EaD) e 
                                  Licenciatura em Informática. Foi nomeado pela Comissão de Educação da Sociedade Brasileira de Computação (SBC) para atuar como membro na redação dos Referenciais 
                                  de Formação para os Bacharelados em Sistemas de Informação (2016-2017) e, desde então, tem atuado junto à Comissão de Educação da SBC na promoção da qualidade
                                  dos projetos pedagógicos das graduações em Tecnologia da Informação. Atualmente exerce o cargo de Coordenador Acadêmico do Bacharelado em Ciência da Computação 
                                  do Centro Universitário Univeritas-RJ e o cargo Assessor de Tecnologia da Informação no Conselho Regional de Farmácia do Estado do Rio de Janeiro. <br><br>
                                  
                                  11:00 - 12:30 <br>
                                  <b>Oficina/Palestra "Construção de projetos pedagógicos a partir dos RFs de SI"</b> <br>
                                  Ministrante: Alessandro Cerqueira (SBC/RJ) <br><br>
                                  
                                  14:00 - 15:00 <br>
                                  <b>Palestra "Como criar experiências de realidade prática em cursos de SI"</b> <br>
                                  Objetivo da palestra: Os referenciais de formação para os cursos de graduação em computação, disponibilizados pela Sociedade Brasileira de Computação, destacam a 
                                  importância do desenvolvimento da habilidade de resolução de problemas do mundo real para a formação dos egressos. Deste modo, nesta palestra discutiremos algumas 
                                  formas de gerar experiências mais próximas do mundo real, relataremos nossas experiências em algumas disciplinas e os resultados obtidos. <br>
                                  Ministrante: Debora Nascimento (UFS) <br>
                                  Possui doutorado em Ciência de Computação pela Universidade Federal da Bahia (2017), mestrado em Ciência da Computação pela Universidade Federal de Campina Grande (2002) 
                                  e graduação em Engenharia Civil pela Universidade Federal de Sergipe (1991). Professora efetiva da Universidade Federal de Sergipe desde 2004, atuou também no mercado de 
                                  trabalho como gerente, analista de sistemas e programadora. Tem experiência na área de Engenharia de Software, com interesse nos seguintes temas: modelagem, processos de 
                                  software, engenharia de requisitos, qualidade de software, testes de software, educação em engenharia de software, engenharia de software experimental e projetos open source. <br><br>
                                  
                                  15:00 - 16:00 <br>
                                  <b>Palestra "Programa educacional AWS Academy" (30 min)</b> <br>
                                  Objetivo da palestra: Nesta palestra falaremos da inclusão de teoria, conceitos e laboratórios de Computação em Nuvem (Cloud Computing) em currículos tradicionais de cursos 
                                  como Ciência da Computação, Engenharia de Computação, Análise de Sistemas entre outros. Falaremos também em detalhes da proposta da AWS para esta inclusão através do programa 
                                  AWS Academy, citando casos de uso de instituições Brasileiras (USP, SENAC (RJ,RS), UNIT (Sergipe)) e como os alunos estão se beneficiando do aprendizado e certificação em 
                                  preparação para a demanda de mercado de trabalho. <br>
                                  Ministrante: Charleston Telles (Amazon/SP) <br>
                                  Mestre em Arquitetura de Software pela Queensland University of Technology (QUT - Austrália), AWS Certified Solution Architect (Associate), TOGAF certified entre outros. 
                                  Experiência de quase 20 anos como Consultor de Tecnologia de Informação e atualmente trabalha como Arquiteto de Soluções na Amazon Web Services (AWS) onde é Gerente 
                                  Técnico do programa educacional AWS Academy. <br>
                                  <b>Palestra "Evasão e retenção nos cursos de SI" (30 min)</b> <br>
                                  Objetivo da palestra: Apresentar uma análise sobre movimentações de entrada, evasão e formação dos Bacharelados em Sistemas de Informação baseada nos microdados da 
                                  educação superior nos anos de 2014-2017. <br>
                                  Ministrante: Alessandro Cerqueira (Univeritas/RJ) <br>
                                  Bacharel em Informática pelo IM/UFRJ (1993) e Mestre em Engenharia de Sistemas e Computação pela COPPE/UFRJ (1997). Atua como docente do ensino superior 
                                  desde 1999 e vem exercendo desde 2009 o cargo de Coordenador Acadêmico em cursos de Bacharelado em Sistemas de Informação, Bacharelado em Ciências da Computação, 
                                  Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (presencial e EaD), Superior de Tecnologia em Redes de Computadores (Presencial e EaD) e 
                                  Licenciatura em Informática. Foi nomeado pela Comissão de Educação da Sociedade Brasileira de Computação (SBC) para atuar como membro na redação dos Referenciais 
                                  de Formação para os Bacharelados em Sistemas de Informação (2016-2017) e, desde então, tem atuado junto à Comissão de Educação da SBC na promoção da qualidade
                                  dos projetos pedagógicos das graduações em Tecnologia da Informação. Atualmente exerce o cargo de Coordenador Acadêmico do Bacharelado em Ciência da Computação 
                                  do Centro Universitário Univeritas-RJ e o cargo Assessor de Tecnologia da Informação no Conselho Regional de Farmácia do Estado do Rio de Janeiro.`},

      {header: 'WQPSI', conteudo: `<b>Prof. Marcelo Fornazin (UFF), Prof. Mariano Pimentel (UNIRIO) e Prof. Sean Siqueira (UNIRIO)</b> discutem neste painel sobre questões relacionadas 
                                  à qualidade da pesquisa em Sistemas de Informação no Brasil, incluindo fundamentação/teorização em SI, epistemologia/metodologia/métodos de pesquisa em SI, 
                                  impacto da pesquisa e contexto Brasil. Venha participar deste bate-papo e apoiar na elaboração de ações que visem melhorar a qualidade da pesquisa desenvolvida 
                                  em SI no Brasil.`},

      {header: 'GranDSIBR (SBC)', conteudo: `<b>Seminário de Acompanhamento dos Grandes Desafios da Pesquisa em Sistemas de Informação </b> <br>
                                            Painel de apresentação e debate sobre os avanços já alcançados pela comunidade científica e pela comunidade de prática em Sistemas de Informação no 
                                            Brasil em relação aos Grandes Desafios da Pesquisa em Sistemas de Informação (2016 a 2026). <br><br>

                                            Facilitadores: Renata Araujo (UPM) Rita Suzana Maciel (UFBA) e Clodis Boscarioli (UNIOESTE)`}
    ]
  }
}
