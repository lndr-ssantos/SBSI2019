import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-primeiro-dia',
  templateUrl: 'primeiro-dia.html',
})
export class PrimeiroDiaPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Programação do Dia', conteudo: `09:00 - 10:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: EISI (incluindo ferramentas) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 36: Trilha Principal (Sessão Técnica 1) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 30: WICSI (Sessão 1) <br><br>
                                                
                                                10:30 - 11:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break (CoDeSii) <br><br>
                                                
                                                11:00 - 12:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: EISI (incluindo ferramentas) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 36: Trilha Principal (Sessão Técnica 2) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 30: WICSI (Sessão 2) <br><br>
                                                
                                                12:30 - 14:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Almoço <br><br>
                                                
                                                14:30 - 16:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 26: Minicurso 1 (TRM)<br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 29: Minicurso 2 (SoIS)<br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: EISI (incluindo ferramentas) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 36: Trilha Principal (Sessão Técnica 3) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 30: WICSI (Sessão 3) <br><br>
                                                
                                                16:00 - 16:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break (CoDeSii) <br><br>
                                                
                                                16:30 - 18:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: EISI (incluindo ferramentas) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 36: Trilha Principal (Sessão Técnica 4) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 30: WICSI (Sessão 4) <br><br>
                                                
                                                16:30 - 19:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 26: Minicurso 1 (TRM)<br>
                                                &nbsp; &nbsp; &nbsp;- Bloco F - Sala 29: Minicurso 2 (SoIS)<br>
                                                
                                                19:00 - 21:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Auditório Bloco G - Abertura do SBSI 2019 + Apresentação Cultural<br>` },

      {header: 'Detalhes das Sessões Técnicas', conteudo: `<b>Sessão Técnica 1 (ST1) - Project Management Aspects</b> <br>
                                                          <b>Chair:</b> Renata Araujo (Universidade Presbiteriana Mackenzie) <br><br>
                                                          
                                                          1 - Kairós: Predictive Model Based On Context Histories For Time Management In Projects <br>
                                                          &nbsp; &nbsp; &nbsp;- Felipe Rodrigues, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alexsandro Filippetto, <br>
                                                          &nbsp; &nbsp; &nbsp;- Jorge Luis Barbosa (UNISINOS) <br><br>

                                                          2 - Level UP: Mapping Hard Skills of IT Practitioners to support the Project Management <br>
                                                          &nbsp; &nbsp; &nbsp;- Vanessa Milon (Fundação Paulo Feitosa), <br>
                                                          &nbsp; &nbsp; &nbsp;- Ricardo Araújo (Fundação Paulo Feitosa), <br>
                                                          &nbsp; &nbsp; &nbsp;- Osenias Oliveira (Fundação Paulo Feitosa), <br>
                                                          &nbsp; &nbsp; &nbsp;- Andréia Vieira (Fundação Paulo Feitosa), <br>
                                                          &nbsp; &nbsp; &nbsp;- Adriano Mendes (ASGD Partners), <br>
                                                          &nbsp; &nbsp; &nbsp;- Luis Braga (Fundação Paulo Feitosa), <br>
                                                          &nbsp; &nbsp; &nbsp;- Bruna Ferreira (Fundação Paulo Feitosa) <br><br>

                                                          3 - Resource Demand Management in Java Ecosystem <br>	
                                                          &nbsp; &nbsp; &nbsp;- Thiciane Silva (UNIT), <br> 
                                                          &nbsp; &nbsp; &nbsp;-  Fabio Rocha (UNIT), <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Santos (UNIRIO) <br><br>
                                                          
                                                          <b>Sessão Técnica 2 (ST2) - Decision Support Systems (1):</b> <br>
                                                          <b>Chair:</b> Clodis Boscarioli (UNIOESTE) <br><br>
                                                          
                                                          1 - Location-Allocation of Police Vehicles under a Multi-period Perspective <br>
                                                          &nbsp; &nbsp; &nbsp;- Amarildo de Lucena (UFRPE), <br>
                                                          &nbsp; &nbsp; &nbsp;- Silvana Bocanegra (UFRPE), <br>
                                                          &nbsp; &nbsp; &nbsp;- Flavius da Luz e Gorgônio (UFRN) <br><br>
                                                          
                                                          2 - A Framework to Support Experts in the Study of Energy Efficiency in Urban Trains <br>
                                                          &nbsp; &nbsp; &nbsp;- Mayrton Queiroz, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ruan Palmeira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Felipe Melo, <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Daniel,<br>
                                                          &nbsp; &nbsp; &nbsp;- Icaro Rique, <br>
                                                          &nbsp; &nbsp; &nbsp;- Augusto Guimarães, <br>
                                                          &nbsp; &nbsp; &nbsp;- Marcelle Martins,  <br>
                                                          &nbsp; &nbsp; &nbsp;- Natasha Lino (UFPB) <br><br>

                                                          3 - Building a conceptual architecture and stakeholder map of a system-of-systems for disaster monitoring and early-warning: A case study in Brazil	<br>	
                                                          &nbsp; &nbsp; &nbsp;- Flávio Horita (UFABC), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Donna Rhodes (Massachusetts Institute of Technology), <br>
                                                          &nbsp; &nbsp; &nbsp;- Thiago Inocêncio (UFABC), <br>
                                                          &nbsp; &nbsp; &nbsp;- Gustavo Gonzales (UFABC) <br><br>
                                                          
                                                          <b>Sessão Técnica 3 (ST3) - Requirements and Models:</b> <br>
                                                          <b>Chair:</b> Rita Maciel (UFBA) <br><br>
                                                          
                                                          1 - Improvements on diagnostic assessment questionnaires of Maturity Level Management with feature selection <br>
                                                          &nbsp; &nbsp; &nbsp;- Bruno Prece, <br>
                                                          &nbsp; &nbsp; &nbsp;- Edson Pacheco, <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodolfo Barros, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sylvio Barbon Jr. (UEL) <br><br>
                                                          
                                                          2 - LifeReview: A model for monitoring people with anxiety disorder <br>
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Paula, <br>
                                                          &nbsp; &nbsp; &nbsp;- Jorge Barbosa (UNISINOS) <br><br>

                                                          3 - Software Requirements for the Design of Gamified Applications for Time Management and Tasks for Children and Adolescents with ADHD <br>	
                                                          &nbsp; &nbsp; &nbsp;- Tássio Gomes (UFAL), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Wilk Oliveira (USP), <br>
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Marques (UFAL), <br>
                                                          &nbsp; &nbsp; &nbsp;- Patrick Brito (UFAL), <br>
                                                          &nbsp; &nbsp; &nbsp;- Ig Bittencourt (UFAL) <br><br>
                                                          
                                                          <b>Sessão Técnica 4 (ST4) - Sentiment Analysis:</b> <br>
                                                          <b>Chair:</b> José Viterbo (UFF) <br><br>
                                                          
                                                          1 - Enrichment of dictionaries to improve the automatic classification of feelings in postings related to the use of systems <br>
                                                          &nbsp; &nbsp; &nbsp;- Afonso Lima, <br>
                                                          &nbsp; &nbsp; &nbsp;- Marília Mendes, <br>
                                                          &nbsp; &nbsp; &nbsp;- Lívia Rafael (UFC) <br><br>
                                                          
                                                          2 - Sequential Sentiment Pattern Mining to Predict Churn in CRM Systems: A Case Study with Telecom Data <br>
                                                          &nbsp; &nbsp; &nbsp;- Thiago Paiva Pimentel, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ronaldo Ribeiro Goldschmidt (IME) <br><br>

                                                          3 - Opinion Mining in Facebook Regional Discussion Groups A Case Study to Identify Health, Education and Security Posts in Discussion Groups <br>	
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Augusto Sápiras, <br> 
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Antônio Weber (Faculdades Integradas de Taquara) <br><br>`},
      
      {header: 'Programação - EISI', conteudo: `Sessão 1 - Ferramentas <br>      
                                                          - Duca, um aplicativo civil colaborativo para alavancar a educação - Alan Passos, John Santos, Renan Santos, André Nascimento, 
                                                          Methanias Colaço Júnior, Abelardo Mota, Eduardo Cortes <br>
                                                          - SF2: Um aplicativo para identificar espécies de peixes do Baixo São Francisco - Ítalo Lima, Henrique Couto, André Almeida, 
                                                          André Magno, Davy Baía <br>
                                                          - GalactusWeb - Um Data Base para apoio a tomada de decisão no âmbito do Ministério Público de Sergipe - Fabio Mangueira, 
                                                          Methanias Colaço Júnior, Luan Souza, Everton Recchi <br><br>
                                                          
                                                          Sessão 2 - Pitches <br>
                                                          - Batalha do Aprendizado - Bruno Lopes Xavier <br>
                                                          - Cara de Aprender CADAP Uma ferramenta para trabalhar emoções e aprendizagem utilizando reconhecimento de expressões faciais - Carla Marina C. Paxiúba <br>
                                                          - Mob4Tour: Uma Aplicação Móvel para o Setor do Turismo - Rendrikson Soares, André Araújo, Davy Baia, Ivon Silva, José Silva, Gabriel Rodrigues, Jose Santos <br>
                                                          - Ahavá (Aplicativo de cuidado com animais) - Fabíola Ribeiro Batista <br><br>
                                                          
                                                          Sessão 3 - Cases <br>
                                                          - Aplicativo móvel DOE+ para Agendamento de doação de sangue no Hemocentro de Alagoas - Marcílio Ferreira de Souza Júnior <br>
                                                          - Sistema Bombeiros Paraná v6.0 - Christian Carlos Souza Mendes, Leandro Batista de Almeida, Carlo Nery de Lima Moro, Douglas Vicente Soares <br>
                                                          - Automatizando processo de votação do Circuito Penedo de Cinema através do uso de aplicativo móvel - José M. C. Gomes, Henrique C. Melo, 
                                                          Daniel G. C. Pereira,Ítalo J. de M.a Lima, André A. Silva, Paulo R. de S. e Silva Filho <br><br>
                                                          
                                                          Sessão 4 - Demonstrações ou Pôsteres <br>
                                                          - Duca, um aplicativo civil colaborativo para alavancar a educação - Alan Passos, John Santos, Renan Santos, André Nascimento, 
                                                          Methanias Colaço Júnior, Abelardo Mota, Eduardo Cortes <br>
                                                          - SF2: Um aplicativo para identificar espécies de peixes do Baixo São Francisco - Ítalo Lima, Henrique Couto, André Almeida, 
                                                          André Magno, Davy Baía <br>
                                                          - GalactusWeb - Um Data Base para apoio a tomada de decisão no âmbito do Ministério Público de Sergipe - Fabio Mangueira, 
                                                          Methanias Colaço Júnior, Luan Souza, Everton Recchi <br>
                                                          - Batalha do Aprendizado - Bruno Lopes Xavier <br>
                                                          - Cara de Aprender CADAP Uma ferramenta para trabalhar emoções e aprendizagem utilizando reconhecimento de expressões faciais - Carla Marina C. Paxiúba <br>
                                                          - Mob4Tour: Uma Aplicação Móvel para o Setor do Turismo - Rendrikson Soares, André Araújo, Davy Baia, Ivon Silva, José Silva, Gabriel Rodrigues, Jose Santos <br>
                                                          - Ahavá (Aplicativo de cuidado com animais) - Fabíola Ribeiro Batista <br>
                                                          - Aplicativo móvel DOE+ para Agendamento de doação de sangue no Hemocentro de Alagoas - Marcílio Ferreira de Souza Júnior <br>
                                                          - Sistema Bombeiros Paraná v6.0 - Christian Carlos Souza Mendes, Leandro Batista de Almeida, Carlo Nery de Lima Moro, Douglas Vicente Soares <br>
                                                          - Automatizando processo de votação do Circuito Penedo de Cinema através do uso de aplicativo móvel - José M. C. Gomes, Henrique C. Melo, 
                                                          Daniel G. C. Pereira,Ítalo J. de M.a Lima, André A. Silva, Paulo R. de S. e Silva Filho`},

      {header: 'Programação - WICSI', conteudo: `(11:00 - 11:10) Abertura <br><br>                                                          
                                                          Sessão Técnica 1 <br>
                                                          (11:10 - 11:30) Proposta de adequação da arquitetura do AVA Openredu para suporte a técnicas de análise quantitativa de dados educacionais <br>
                                                          &nbsp; &nbsp; &nbsp;- Juliano Cezar Teles Vaz, <br>
                                                          &nbsp; &nbsp; &nbsp;- Raphael Dourado, <br>
                                                          &nbsp; &nbsp; &nbsp;- Alex Gomes, <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Rodrigues, <br>
                                                          &nbsp; &nbsp; &nbsp;- Tiago José Dimas Dias Nogueira, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sylvio Freire <br><br>
                                                          
                                                          Sessão Técnica 2 <br>
                                                          (14:30 - 14:50) Sistemas de localização indoor utilizando Bluetooth Low Energy: Uma revisão sistemática <br>
                                                          &nbsp; &nbsp; &nbsp;- Matheus Rodrigues, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sergio T. Carvalho <br>
                                                          (14:50 - 15:10) Automatização de Teste de Segurança Móvel com MobiSec <br>
                                                          &nbsp; &nbsp; &nbsp;- Mariano Mendonca, <br>
                                                          &nbsp; &nbsp; &nbsp;- Layse Souza, <br>
                                                          &nbsp; &nbsp; &nbsp;- Isadora Lima do Nasimento, <br>
                                                          &nbsp; &nbsp; &nbsp;- Fabio Rocha <br>
                                                          (15:10 - 15:30) My Lunch: Inovação na interface de usuário em aplicativo para entrega de comida <br>
                                                          &nbsp; &nbsp; &nbsp;- Henrique Policarpo, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sofia Paiva <br>
                                                          (15:30 - 15:50) Análise de sites disseminadores de fake news <br>
                                                          &nbsp; &nbsp; &nbsp;- Davi Guimaraes, <br>
                                                          &nbsp; &nbsp; &nbsp;- Matheus Fagundes, <br>
                                                          &nbsp; &nbsp; &nbsp;- Guilherme Muller,  <br>
                                                          &nbsp; &nbsp; &nbsp;- Nilson Lazarin <br><br>

                                                          Sessão Técnica 3 <br>
                                                          (16:30 - 16:50) Rede Neural Artificial Convolucional Aplicada ao Reconhecimento de Configuração de Mão nos Símbolos de 0 a 9 da Língua Brasileira de Sinais (LIBRAS) <br>
                                                          &nbsp; &nbsp; &nbsp;- Adriel Santos, <br>
                                                          &nbsp; &nbsp; &nbsp;- Talles Brito, <br>
                                                          &nbsp; &nbsp; &nbsp;- Jayne Silva, <br>
                                                          &nbsp; &nbsp; &nbsp;- Robson Feitosa, <br>
                                                          &nbsp; &nbsp; &nbsp;- Iago Bacurau <br>
                                                          (16:50 - 17:10) Driving Behavior Analysis: An Approach Using Clustering Algorithms <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucas Perez Chabariberi, <br>
                                                          &nbsp; &nbsp; &nbsp;- Francisco Nogueira Calmon Sobral, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sarajane Peres <br>
                                                          (17:10 - 17:30) Per Query Subtopic Discovery for Diverse Image Retrieval
                                                          &nbsp; &nbsp; &nbsp;- Solenir Figuerêdo, <br>
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Calumby`}
    ]
  }
}
