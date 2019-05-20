import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-quinto-dia',
  templateUrl: 'quinto-dia.html',
})
export class QuintoDiaPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Programação do Dia', conteudo: `09:00 - 10:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 46: Trilha Principal (Sessão Técnica 21) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 24: Trilha Principal (Sessão Técnica 22) <br>
                                                
                                                10:30 - 11:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break <br><br>
                                                
                                                12:30 - 14:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Almoço <br><br>
                                                
                                                14:30 - 16:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 46: Trilha Principal (Sessão Técnica 23) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 24: Trilha Principal (Sessão Técnica 24) <br>
                                                
                                                16:00 - 16:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break <br><br>
                                                
                                                16:30 - 18:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 46: Trilha Principal (Sessão Técnica 25) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 24: Trilha Principal (Sessão Técnica 26) <br>

                                                18:00 - 19:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório do Bloco G - Encerramento do SBSI 2019`},

      {header: 'Detalhes das Sessões Técnicas', conteudo: `<b>Sessão Técnica 21 (ST21) - Ontology, Data and Applications:</b> <br>
                                                          <b>Chair:</b>  Leonardo Azevedo (IBM) <br><br>

                                                          1 - Outer-Tuning: an integration of rules, ontology and RDBMS <br>
                                                          &nbsp; &nbsp; &nbsp;- Rafael Oliveira (PUC-Rio), <br>
                                                          &nbsp; &nbsp; &nbsp;- Fernanda Baião (PUC-Rio), <br>
                                                          &nbsp; &nbsp; &nbsp;- Ana Carolina Almeida (UERJ), <br>
                                                          &nbsp; &nbsp; &nbsp;- Daniel Schwabe (PUC-Rio), <br>
                                                          &nbsp; &nbsp; &nbsp;- Sérgio Lifschitz (PUC-Rio) <br><br>

                                                          2 - Multirelation Association Rule Mining on Datasets of the Web of Data <br>
                                                          &nbsp; &nbsp; &nbsp;- Felipe Oliveira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Raquel Costa, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ronaldo Goldschmidt, <br>
                                                          &nbsp; &nbsp; &nbsp;- Maria Cláudia Cavalcanti (IME) <br><br>

                                                          3 - Market Prediction in Criptocurrency: A Systematic Literature Mapping <br>	
                                                          &nbsp; &nbsp; &nbsp;- André Monteiro, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Adler Souza, <br>
                                                          &nbsp; &nbsp; &nbsp;- Bruno Batista, <br>
                                                          &nbsp; &nbsp; &nbsp;-  Mauricio Zaparoli (UNIFEI) <br><br>
                                                          
                                                          <b>Sessão Técnica 22 (ST22) - Machine Learning and Applications:</b> <br>
                                                          <b>Chair:</b> Scheila Ávila e Silva (UCS) <br><br>
                                                          
                                                          1 - UFJF-MLTK: a framework for machine learning algorithms <br>
                                                          &nbsp; &nbsp; &nbsp;- Mateus Marim, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alessandreia Oliveira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Saulo Villela (UFJF) <br><br>
                                                          
                                                          2 - How do software technologies impact the daily of people with autism in Brazil: A survey <br>
                                                          &nbsp; &nbsp; &nbsp;- Tamires Sousa, <br>
                                                          &nbsp; &nbsp; &nbsp;- Verilene Ferreira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Anna Beatriz dos Santos (UFC)<br><br>

                                                          3 - Machine learning techniques for code smells detection: an empirical experiment on a highly imbalanced setup	<br>	
                                                          &nbsp; &nbsp; &nbsp;- Frederico Luiz, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Bruno Rodrigues, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Fernando Parreiras (FUMEC) <br><br>
                                                          
                                                          <b>Sessão Técnica 23 (ST23) - Systems Architecture and Design:</b> <br>
                                                          <b>Chair:</b>  Valdemar Graciano Neto <br><br>
                                                          
                                                          1 - An Educational Process for Requirements Extraction and Use Case Modeling Based on Problem-Based Learning and Knowledge Acquisition <br>
                                                          &nbsp; &nbsp; &nbsp;- Dildre Vasques (USP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Juan Jaramillo (UNICAMP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Gláucia Santos (UNICAMP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Franciene Gomes (UFMS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Pedro Garcia-Nunes (UNICAMP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Paulo Pedro (UNICAMP) <br><br>
                                                          
                                                          2 - An Exploratory Study on Detection of Cloned Code in Information Systems <br>
                                                          &nbsp; &nbsp; &nbsp;- Mallú Batista, <br>
                                                          &nbsp; &nbsp; &nbsp;- Paulo Parreira Júnior, <br>
                                                          &nbsp; &nbsp; &nbsp;- Heitor Costa (UFLA)  <br><br>

                                                          3 - An exploratory study on the architectural modeling of information systems considering functional usability features <br>	
                                                          &nbsp; &nbsp; &nbsp;- Alex Costa, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Anna Beatriz Marques (UFC) <br><br>
                                                          
                                                          <b>Sessão Técnica 24 (ST24) - Knowledge and Information Discovery (2):</b> <br>
                                                          <b>Chair:</b> Luis Rivero (UFMA) <br><br>
                                                          
                                                          1 - Recommendation System for Cross-Platform Mobile Development Framework <br>
                                                          &nbsp; &nbsp; &nbsp;- Denisson Santos, <br>
                                                          &nbsp; &nbsp; &nbsp;- Hugo Nunes, <br>
                                                          &nbsp; &nbsp; &nbsp;- Hendrik Macedo, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alberto Costa Neto (UFS) <br><br>
                                                          
                                                          2 - Dynamic Discovery of IoT Services Based on Semantic Processing of Event Flows <br>
                                                          &nbsp; &nbsp; &nbsp;- Anderson Costa (UFMA), <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodolfo Alves (UFMA), <br>
                                                          &nbsp; &nbsp; &nbsp;- José da Silva e Silva (UFMA), <br>
                                                          &nbsp; &nbsp; &nbsp;- Markus Endler (PUC-Rio) <br><br>

                                                          3 - LaNa2: A tool for processing natural texts in Portuguese language <br>	
                                                          &nbsp; &nbsp; &nbsp;- Adolfo Guimarães (UNIT), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Thiago Bispo (IFS), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Arthur Azevedo (UNIT), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Hendrik Macedo (UFS) <br><br>
                                                          
                                                          <b>Sessão Técnica 25 (ST25) - Information Systems and Society (2):</b> <br>
                                                          <b>Chair:</b> Scheila Ávila e Silva (UCS) <br><br>
                                                          
                                                          1 - MultiMagNet: A Non-Deterministic Defense Based on Ensembles for Detecting Adversarial Images in Decision Support Systems <br>
                                                          &nbsp; &nbsp; &nbsp;- Gabriel Machado (IME), <br>
                                                          &nbsp; &nbsp; &nbsp;- Eugênio Silva (UEZO), <br>
                                                          &nbsp; &nbsp; &nbsp;- Ronaldo Goldschmidt (IME) <br><br>
                                                          
                                                          2 - Comparing Data Mining Techniques for Anti-Money Laundering <br>
                                                          &nbsp; &nbsp; &nbsp;- Luis Dias (Ministério Público do Estado de Minas Gerais), <br>
                                                          &nbsp; &nbsp; &nbsp;- Fernando Parreiras (FUMEC) <br><br>

                                                          3 - Motivations, Risks and Benefits in Outsourcing Information Systems: Confronting the Visions of Providers and Contractors in Maceió <br>	
                                                          &nbsp; &nbsp; &nbsp;- Matheus Lins, <br>
                                                          &nbsp; &nbsp; &nbsp;- Mônica Cunha, <br>
                                                          &nbsp; &nbsp; &nbsp;- José Duda Junior (IFAL), <br><br>
                                                          
                                                          <b>Sessão Técnica 26 (ST26) - Networks:</b> <br>
                                                          <b>Chair:</b> Luis Rivero (UFMA) <br><br>
                                                          
                                                          1 - FAEController: A Relative Efficiency Evaluation Framework of SDN Controllers <br>
                                                          &nbsp; &nbsp; &nbsp;- Eduardo Klosowski, <br>
                                                          &nbsp; &nbsp; &nbsp;- Adriano Fiorese (UDESC) <br><br>
                                                          
                                                          2 - Optimization of traffic in real manufacturing environment through WAN accelerators <br>
                                                          &nbsp; &nbsp; &nbsp;- Rafael Frinhani, <br>
                                                          &nbsp; &nbsp; &nbsp;- Wallace Serafim, <br>
                                                          &nbsp; &nbsp; &nbsp;- Bruno Batista (UNIFEI) <br><br>`}

    ]
  }
}
