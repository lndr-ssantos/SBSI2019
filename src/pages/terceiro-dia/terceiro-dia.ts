import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-terceiro-dia',
  templateUrl: 'terceiro-dia.html',
})
export class TerceiroDiaPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Programação do dia', conteudo: `09:00 - 10:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 6: Trilha Principal (Sessão Técnica 9) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 10) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: Master Class 2 - Design Science Research (Prof. Mariano Pimentel) <br><br>
                                                
                                                10:30 - 11:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break <br><br>
                                                
                                                11:00 - 12:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 6: Trilha Principal (Sessão Técnica 11) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 12) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 18: CTDSI/CTCCSI (TCC) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: Master Class 2 - Design Science Research (Prof. Mariano Pimentel) <br><br>
                                                
                                                12:30 - 14:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Almoço <br><br>
                                                
                                                14:30 - 16:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 6: Trilha Principal (Sessão Técnica 13) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 14) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 18: CTDSI/CTCCSI (DSc) <br>
                                                
                                                16:00 - 16:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break <br><br>
                                                
                                                16:30 - 18:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório Bloco G <i>(Keynote Internacional: Prof. Rafael Capilla)</i> <br><br>
                                                
                                                18:00 - 18:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Premiações SBSI/Trilha Principal e CTDSI/CTCCSI<br><br>
                                                
                                                19:30 - 22:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Restaurante na Orla <i>(Jantar de Confraternização)</i>`},

      {header: 'Detalhes das Sessões Técnicas', conteudo: `<b>Sessão Técnica 9 (ST9) - Social Networks:</b> <br>
                                                          <b>Chair:</b> Sylvio Barbon Jr. (UEL) <br><br>
                                              
                                                          1 - Information Diffusion in Social Networks: a recommendation model in the educational context <br>
                                                          &nbsp; &nbsp; &nbsp;- Felipe Braz, <br>
                                                          &nbsp; &nbsp; &nbsp;- Victor Ströele, <br>
                                                          &nbsp; &nbsp; &nbsp;- Fernanda Campos (UFJF), <br><br>

                                                          2 - CrowdRec: Development of a prototype system for crowdsourcing platforms using Google Venture <br>
                                                          &nbsp; &nbsp; &nbsp;- Tiago Ferreira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alisson Zanetti, <br>
                                                          &nbsp; &nbsp; &nbsp;- Fernando Costella, <br>
                                                          &nbsp; &nbsp; &nbsp;- Silvano Silva, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alexandre Zanatta, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ana Marchi (Universidade de Passo Fundo) <br><br>

                                                          3 - A Topological Data Evolution Based Method to Predict Links in Social Networks <br>	
                                                          &nbsp; &nbsp; &nbsp;- Érick Florentino, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Argus Cavalcante, <br> 
                                                          &nbsp; &nbsp; &nbsp;- SRonaldo Goldschmidt (IME) <br> <br>
                                                          
                                                          <b>Sessão Técnica 10 (ST10) - Human and Social Aspects:</b> <br>
                                                          <b>Chair:</b> José Viterbo (UFF) <br><br>
                                                          
                                                          1 - How personality traits influences quality of software developed by students <br>
                                                          &nbsp; &nbsp; &nbsp;- Anderson Barroso (UNIT), <br>
                                                          &nbsp; &nbsp; &nbsp;- Kleber Prado (UNIT), <br>
                                                          &nbsp; &nbsp; &nbsp;- Michel Soares (UFS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Rogério do Nascimento (UFS) <br><br>
                                                          
                                                          2 - On the Effects of Developers' Intuition on Measuring Similarity Between UML Models <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucian Gonçales, <br>
                                                          &nbsp; &nbsp; &nbsp;- Kleinner Farias, <br>
                                                          &nbsp; &nbsp; &nbsp;- Vinicius Bischoff (UNISINOS) <br><br>

                                                          3 - UMLCollab: A hybrid approach for collaborative modeling of UML models	<br>	
                                                          &nbsp; &nbsp; &nbsp;- McLyndon Xavier, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Kleinner Farias, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Jorge Barbosa, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Lucian Gonçales, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Vinicius Bishoff (UNISINOS) <br><br>
                                                          
                                                          <b>Sessão Técnica 11 (ST11) - Process Modeling and Analysis:</b> <br>
                                                          <b>Chair:</b> Davi Viana (UFMA) <br><br>
                                                          
                                                          1 - Comparing Concept Drift Detection with Process Mining Tools <br>
                                                          &nbsp; &nbsp; &nbsp;- Nicolas Omori (UEL), <br>
                                                          &nbsp; &nbsp; &nbsp;- Gabriel Tavares (UEL), <br>
                                                          &nbsp; &nbsp; &nbsp;- Paolo Ceravolo (Università degli Studi di Milano), <br>
                                                          &nbsp; &nbsp; &nbsp;- Sylvio Barbon Jr. (UEL) <br><br>
                                                          
                                                          2 - A Case Study of Process Mining in Auditing <br>
                                                          &nbsp; &nbsp; &nbsp;- Flavia Maria Santoro (UERJ), <br>
                                                          &nbsp; &nbsp; &nbsp;- Thais Barboza (UNIRIO), <br>
                                                          &nbsp; &nbsp; &nbsp;- Kate Revoredo (UFRJ), <br>
                                                          &nbsp; &nbsp; &nbsp;- Rosa Costa (UERJ) <br><br>

                                                          3 - Systematic Literature Review on BPMN-based Process Adaptation Approaches <br>	
                                                          &nbsp; &nbsp; &nbsp;- Raquel Pillat, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Renata Santos, <br>
                                                          &nbsp; &nbsp; &nbsp;- Toacy Oliveira (COPPE/UFRJ) <br><br>
                                                          
                                                          <b>Sessão Técnica 12 (ST12) - Optimization and Applications:</b> <br>
                                                          <b>Chair:</b> Clodis Boscarioli (UNIOESTE) <br><br>
                                                          
                                                          1 - Traveling Salesperson Problem with Hotel Selection: A systematic review of the literature <br>
                                                          &nbsp; &nbsp; &nbsp;- Marques Sousa (IFSP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Luiz Satoru Ochi (UFF), <br>
                                                          &nbsp; &nbsp; &nbsp;- Simone Martins (UFF) <br><br>
                                                          
                                                          2 - Efficient Hyperparameter Optimization of Convolutional Neural Networks on Classification of Early Pulmonary Nodules <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucas Lima (UFAL), <br>
                                                          &nbsp; &nbsp; &nbsp;- José Ferreira Junior (USP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Marcelo Oliveira (UFAL) <br><br>

                                                          3 - Deep Neural Networks Applied to User Recognition Based on Keystroke Dynamics: Learning from Raw Data <br>	
                                                          &nbsp; &nbsp; &nbsp;- Marco Cruz, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Ronaldo Goldschmidt (IME) <br><br>
                                                          
                                                          <b>Sessão Técnica 13 (ST13) - Interoperability, Data and Ecosystems:</b> <br>
                                                          <b>Chair:</b> José Maria David (UFJF) <br><br>
                                                          
                                                          1 - A Conceptual Framework for Pragmatic Interoperability <br>
                                                          &nbsp; &nbsp; &nbsp;- Elivaldo Ribeiro, <br>
                                                          &nbsp; &nbsp; &nbsp;- Erasmo Monteiro, <br>
                                                          &nbsp; &nbsp; &nbsp;- Daniela Claro, <br>
                                                          &nbsp; &nbsp; &nbsp;- Rita Maciel (UFBA) <br><br>
                                                          
                                                          2 - Human-Computer Interaction Factors in Software Ecosystems: A Systematic Mapping Study <br>
                                                          &nbsp; &nbsp; &nbsp;- Mariana Santos (UFVJM), <br>
                                                          &nbsp; &nbsp; &nbsp;- Juliana Fernandes (UNIRIO & IFPI), <br>
                                                          &nbsp; &nbsp; &nbsp;- Maria Villela (UFVJM), <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Santos (UNIRIO) <br><br>

                                                          3 - Louvre: A Framework for Metadata Curation in Data Ecosystem <br>	
                                                          &nbsp; &nbsp; &nbsp;- Marcelo Oliveira, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Bernadette Lóscio (UFPE) <br><br>
                                                          
                                                          <b>Sessão Técnica 14 (ST14) - Systems and Software Product Lines:</b> <br>
                                                          <b>Chair:</b> Renata Araujo (Universidade Presbiteriana Mackenzie) <br><br>
                                                          
                                                          1 - Towards a semiautomatic tool to support the integration of feature models <br>
                                                          &nbsp; &nbsp; &nbsp;- Vinicius Bischoff, <br>
                                                          &nbsp; &nbsp; &nbsp;- Kleinner Farias, <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucian Gonçales,  <br>
                                                          &nbsp; &nbsp; &nbsp;- Jorge Barbosa (UNISINOS) <br><br>
                                                          
                                                          2 - Visualizing Commonalities and Variabilities in a Software Product Family <br>
                                                          &nbsp; &nbsp; &nbsp;- Denise Costa, <br>
                                                          &nbsp; &nbsp; &nbsp;- Pedro Santos Neto (UFPI) <br><br>

                                                          3 - Requirement Reuse in Business Processes Lines <br>	
                                                          &nbsp; &nbsp; &nbsp;- Doglas Sorgatto, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Débora Paiva, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Maria Cagnin (UFMS)`},

      {header: 'Master Class 2', conteudo: `<b>Resumo:</b> Pesquisas na área de Sistemas de Informação objetivam produzir conhecimentos que 
                                                                              possibilitem o desenvolvimento de soluções baseadas em tecnologias computacionais para problemas 
                                                                              relevantes de organizações e da sociedade (HEVNER et al., 2004). Muitas pesquisas nessa área envolvem 
                                                                              o desenvolvimento de algum artefato, contudo, "algumas vezes, dissertações e teses em computação, bem 
                                                                              como artigos científicos, ainda são fortemente caracterizados como apresentações meramente tecnológicas: 
                                                                              sistemas, protótipos, frameworks, arquiteturas, modelos, processos, todas essas construções são técnicas, 
                                                                              e não necessariamente ciência" (WAZLAWICK, 2008). Essa situação é ainda mais agravada pelo fato dos métodos 
                                                                              tradicionais de pesquisa científica, como Experimento e Estudo de Caso, não pressuporem o desenvolvimento de um 
                                                                              artefato, o que gera muitas dúvidas em pesquisadores(as) e contribui para que algumas pesquisas nessa área sejam 
                                                                              confusas e com baixo rigor teórico-metodológico. É em Design Science Research que são encontrados fundamentos que 
                                                                              legitimam o desenvolvimento de artefatos como um meio para a produção de conhecimentos científicos do ponto de 
                                                                              vista epistemológico e filosófico, principalmente a partir da obra de Hebert Simon (1969) sobre “As Ciências do 
                                                                              Artificial”. Esse paradigma epistemológico tem se popularizado muito na área de Sistemas de Informação, principalmente 
                                                                              a partir da década de 1990. Nesta Master-Class, irei discutir a relevância de DSR para garantir o rigor teórico e 
                                                                              epistemológico-metodológico esperado das pesquisas científicas em Sistemas de Informação que envolvem o desenvolvimento 
                                                                              de artefatos. Também irei exemplificar como nos apropriamos dessa abordagem para pensar-fazer as pesquisas no grupo que 
                                                                              coordeno, especialmente a partir do exemplo da premiada pesquisa sobre “Tapetes Musicais Inteligentes”. <br><br>

                                                                              <b>Mariano Pimentel</b> é Doutor em Informática, é pesquisador na área de Sistemas de Informação e Informática na Educação. 
                                                                              É professor do Departamento de Informática Aplicada da UNIRIO e leciona a disciplina “Design Science Research” na Pós-Graduação 
                                                                              em Informática (PPGI-UNIRIO). É coordenador do grupo de pesquisa ComunicaTEC, que pesquisa o uso e o desenvolvimento de sistemas 
                                                                              computacionais para comunicação voltados para educação e colaboração. É colaborador no grupo de pesquisa GPDOC - Grupo de Pesquisa 
                                                                              em Docência e Cibercultura. É autor do livro "Sistemas Colaborativos" (PIMENTEL; FUKS, 2011), que recebeu o Prêmio Jabuti. Seus 
                                                                              livros mais recentes são "Internet conversation media" e "Do email ao Facebook" (disponíveis online pela Amazon). Tem extensa 
                                                                              produção acadêmica, alcançando atualmente Índice-h = 23 
                                                                              <a href="http://scholar.google.com/citations?user=_UDWLSwAAAAJ">http://scholar.google.com/citations?user=_UDWLSwAAAAJ</a>. <br><br>
                                                                              
                                                                              <b>Rafael Capilla</b> is Associate Professor at Rey Juan Carlos University of Madrid. His research focuses on Software Architecture, 
                                                                              Software Product Line Engineering, Dynamic Variability and Software Sustainability among other topics. He was co-editor and co-suthor 
                                                                              of the Springer book on Systems and software Variability Management (2013) with Jan Bosch and Kyo-Chul Kang. <br>
                                                                              Rafael participated in several EU and Spanish research and development projects and he is a regular reviewer of well-known international 
                                                                              Journals and Magazines (TOSEM, JSS, TSE, IST, SCP, Computer, Software). He is co-author of more than 90 conference and journal papers, 
                                                                              and book chapters, and he has been guest co-editor in eight special issues for JSS, REJ, JSEP and SOFTWARE. Rafael acted as General 
                                                                              Chair of international conferences like CMSR2010, ICSR2018 and VAMOS2018 and co-chaired several workshops (R2PL2006, DSPL2017, ENSEMBLE2019). 
                                                                              He is also a member of the IEEE Software boards initiatives team, Senior IEEE member and coordinator of IEEE Spain Technical chapters. 
                                                                              From Jan-April 2019, has been visiting professor and researcher at Chalmers University of Technology (Sweden). 
                                                                              Web: <a href"https://www.researchgate.net/profile/Rafael_Capilla">https://www.researchgate.net/profile/Rafael_Capilla</a> `},

      {header: 'Programação - CTDSI/CTCCSI', conteudo: `<b>CTCCSI 2019</b> <br>
                                                                  11:00 - 11:30 <br>
                                                                  "SIDD - Scrum Iteration Driven Development: Processo Ágil para Desenvolvimento e Gerenciamento de Software" <br>
                                                                  Tayse Virgulino Ribeiro, Cristina D’Ornelas Filipakis Souza <br><br>
                                                                  
                                                                  11:30 - 12:00 <br>
                                                                  Sistema Integrado de Gestão de Unidades de Alimentação e Nutrição: Módulo de Criação e Prescrição de Cardápios" <br>
                                                                  Larysse Silva, Taniro Rodrigues, Taiana Menêzes <br><br>
                                                                  
                                                                  12:00 - 12:30 <br>
                                                                  "Aplicação do Framework ManGve em uma Organização Pública: Um Estudo de Caso"  <br
                                                                  Marcos Arcanjo, Hermano Perrelli de Moura, Alexandre José Henrique de Oliveira Luna <br><br>
                                                                  
                                                                  <b>CTDSI 2019 (Testes)</b> <br>
                                                                  14:30 - 15:00 <br>
                                                                  "Sistemas fuzzy complementam a detecção de socialbots por aprendizado de máquina" <br>
                                                                  Carla Pacheco, Alex Garcia, Raphael Machado, Ronaldo Salles <br><br>
                                                                  
                                                                  15:00 - 15:30 <br>
                                                                  "Modelo de Competências à Luz da Adaptabilidade para Análise da Atuação em Equipes de Software" <br>
                                                                  José Jorge L. Dias Jr., Anielson Barbosa da Silva`}
    ]
  }
}
