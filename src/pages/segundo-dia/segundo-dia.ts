import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-segundo-dia',
  templateUrl: 'segundo-dia.html',
})
export class SegundoDiaPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Programação do dia', conteudo: `09:00 - 10:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 5) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: Master Class 1 - Fundamentos de SI (Prof. Marcelo Fornazin) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 18: WTDSI (Sessão 1) <br><br>
                                                
                                                10:30 - 11:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break (CoDeSii) <br><br>
                                                
                                                11:00 - 12:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 6) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 60: Master Class 1 - Fundamentos de SI (Prof. Marcelo Fornazin) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 18: WTDSI (Sessão 2) <br><br>
                                                
                                                12:30 - 14:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Almoço <br><br>
                                                
                                                14:30 - 16:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Laboratório 1: Minicurso 3 (ECI)<br>
                                                &nbsp; &nbsp; &nbsp;- Laboratório 2: Minicurso 4 (AMCI)<br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 7) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 18: WTDSI (Sessão 3) <br><br>
                                                
                                                16:00 - 16:30 <br>
                                                &nbsp; &nbsp; &nbsp;- Coffe Break (CoDeSii) <br><br>
                                                
                                                16:30 - 18:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 4: Trilha Principal (Sessão Técnica 8) <br>
                                                &nbsp; &nbsp; &nbsp;- Bloco G - Sala 18: WTDSI (Sessão 4) <br><br>
                                                
                                                16:30 - 19:00 <br>
                                                &nbsp; &nbsp; &nbsp;- Laboratório 1: Minicurso 3 (ECI)<br>
                                                &nbsp; &nbsp; &nbsp;- Laboratório 2: Minicurso 4 (AMCI)<br>`},

      {header: 'Detalhes das Sessões Técnicas', conteudo: `Sessão Técnica 5 (ST5) - Decision Support Systems (2): <br>
                                                          Chair: Sylvio Barbon Jr. (UEL) <br><br>
                                              
                                                          1 - Decision Support System for Precision Livestock: Machine Learning Prediction- Based Module for Stocking Rate Adjustment <br>
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Schulte (UNIPAMPA), <br>
                                                          &nbsp; &nbsp; &nbsp;- Naylor Perez (Embrapa Pecuária Sul), <br>
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Pinho (UNIPAMPA), <br>
                                                          &nbsp; &nbsp; &nbsp;- Gustavo Trentin (Embrapa Pecuária Sul) <br><br>

                                                          2 - A Model for Predicting Disapproval of Apprentices in Distance Education Using Decision Tree <br>
                                                          &nbsp; &nbsp; &nbsp;- João Ferreira (IFAM), <br>
                                                          &nbsp; &nbsp; &nbsp;- André Aloise (IFAM), <br>
                                                          &nbsp; &nbsp; &nbsp;- Vítor Matter (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Jorge Barbosa (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Sandro Rigo (UNISINOS), <br>
                                                          &nbsp; &nbsp; &nbsp;- Kleinner Oliveira (UNISINOS) <br><br>

                                                          3 - Investigating Social Information Systems: A Systematic Mapping Study <br>	
                                                          &nbsp; &nbsp; &nbsp;- Nadja Antonio (UNIRIO), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Juliana Fernandes (UNIRIO), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Sandro Freire (UNIRIO), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Marcelo Fornazin (UFF & UNIRIO), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Santos (UNIRIO) <br><br>
                                                          
                                                          Sessão Técnica 6 (ST6) - Software Engineering for Information Systems: <br>
                                                          Chair: Rita Maciel (UFBA) <br><br>
                                                          
                                                          1 - Reducing the execution time of unit tests of smart contracts in blockchain platforms <br>
                                                          &nbsp; &nbsp; &nbsp;- Hallan Medeiros, <br>
                                                          &nbsp; &nbsp; &nbsp;- Patrícia Vilain, <br>
                                                          &nbsp; &nbsp; &nbsp;- Vilmar Pereira Júnior (UFSC) <br><br>
                                                          
                                                          2 - Towards a hybrid approach to measure similarity between UML models <br>
                                                          &nbsp; &nbsp; &nbsp;- Lucian Gonçales, <br>
                                                          &nbsp; &nbsp; &nbsp;- Kleinner Farias,  <br>
                                                          &nbsp; &nbsp; &nbsp;- Vinicius Bischoff (UNISINOS) <br><br>

                                                          3 - Identifying Technical Debt through a Code Comment Mining Tool	<br>	
                                                          &nbsp; &nbsp; &nbsp;- Mário Farias (UFS), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Railan Xisto (UFS), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Marcos Santos (UFS), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Raphael Fontes (UFS), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Methanias Colaço Júnior (UFS), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Rodrigo Spínola (UNIFACS & UESB), <br>
                                                          &nbsp; &nbsp; &nbsp;- Manoel Mendonça (UFBA) <br><br>
                                                          
                                                          Sessão Técnica 7 (ST7) - Knowledge and Information Discovery (1): <br>
                                                          Chair: Flavio Horita (UFABC) <br><br>
                                                          
                                                          1 - Linguistic Pattern Mining for Data Analysis in Microblog Texts using Word Embeddings <br>
                                                          &nbsp; &nbsp; &nbsp;- Danielly Sorato,  <br>
                                                          &nbsp; &nbsp; &nbsp;- Renato Fileto (UFSC) <br><br>
                                                          
                                                          2 - A Deep Learning Approach to the Malware Classification Problem using Autoencoders <br>
                                                          &nbsp; &nbsp; &nbsp;- Dhiego Pinto, <br>
                                                          &nbsp; &nbsp; &nbsp;- Julio Cesar Duarte, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ricardo Sant’Ana (IME) <br><br>

                                                          3 - Application of Clustering Algorithms for Discovering Bug Patterns in JavaScript <br>	
                                                          &nbsp; &nbsp; &nbsp;- Charles Macedo, <br> 
                                                          &nbsp; &nbsp; &nbsp;- André Ruela, <br>
                                                          &nbsp; &nbsp; &nbsp;- Karina Delgado (USP) <br><br>
                                                          
                                                          Sessão Técnica 8 (ST8) - Social Media and Society: <br>
                                                          Chair: Methanias Colaço Júnior (UFS) <br><br>
                                                          
                                                          1 - Deciding among Fake, Satirical, Objective and Legitimate news <br>
                                                          &nbsp; &nbsp; &nbsp;- Janaína Morais, <br>
                                                          &nbsp; &nbsp; &nbsp;- Hugo Abonizio, <br>
                                                          &nbsp; &nbsp; &nbsp;- Gabriel Tavares, <br>
                                                          &nbsp; &nbsp; &nbsp;- André Fonseca, <br>
                                                          &nbsp; &nbsp; &nbsp;- Sylvio Barbon Jr. (UEL) <br><br>
                                                          
                                                          2 - Open Data Extraction, Transformation, and Loading as a Tool for Supporting 2018 Elections' Voters <br>
                                                          &nbsp; &nbsp; &nbsp;- Nélson Passos, <br>
                                                          &nbsp; &nbsp; &nbsp;- Ariel Rodrigues, <br>
                                                          &nbsp; &nbsp; &nbsp;- Hendrik Macedo, <br>
                                                          &nbsp; &nbsp; &nbsp;- Bruno Prado, <br>
                                                          &nbsp; &nbsp; &nbsp;- Gilton Silva, <br>                                                            
                                                          &nbsp; &nbsp; &nbsp;- Leonardo Matos (UFS) <br><br>

                                                          3 - Design Science Research to design a conceptual model about prosopographic information related to politicians <br>	
                                                          &nbsp; &nbsp; &nbsp;- José Barroso Júnior (UNIRIO), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Mariano Pimentel (UNIRIO), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Vanessa Nunes (UnB), <br> 
                                                          &nbsp; &nbsp; &nbsp;- Claudia Cappelli (UFRJ)`},

      {header: 'Master Class 1', conteudo: `<b>Resumo:</b> O objetivo desta aula é apresentar fundamentos teóricos e metodológicos para pesquisa em Sistemas de Informação (SI) 
                                                                a partir de um olhar interdisciplinar que articula conhecimentos das áreas tecnológicas e das ciências sociais. 
                                                                Iniciamos com um posicionamento histórico da sociedade da informação em comparação à sociedade industrial para 
                                                                evidenciarmos a atual centralidade dos SI nas organizações. Em seguida apresentaremos conceituações dos SI como objeto 
                                                                de pesquisa levando em conta aspectos técnicos, econômicos e sociais. Por fim, apresentaremos tópicos, paradigmas de pesquisa 
                                                                e teorias para a investigação dos SI levando em conta conhecimentos de tecnologia, pessoas e organizações. <br><br>

                                                                <b>Marcelo Fornazin</b> é Professor Adjunto no Instituto de Computação da Universidade Federal Fluminense (UFF). 
                                                                Doutor em Administração pela Escola Brasileira de Administração Pública e de Empresas da Fundação Getúlio Vargas 
                                                                (EBAPE/FGV), possui Bacharelado (2006) e Mestrado (2008) em Ciência da Computação pela Universidade Estadual Paulista 
                                                                "Júlio de Mesquita Filho" (UNESP). Integrante do Grupo Temático Informação, Saúde e População da Associação Brasileira 
                                                                de Saúde Coletiva (GTISP/Abrasco), atua também no Programa de Pós-Graduação em Informática da Unirio (PPGI-Unirio) e no 
                                                                Programa de Pós Graduação em Ciência da Informação IBICT-UFRJ. Tem experiência na área de Tecnologia da Informação, com 
                                                                ênfase em Gestão de Tecnologia da Informação, Governo Eletrônico e Computação Social. Atua principalmente nos seguintes temas: 
                                                                planejamento e gestão de TI, avaliação e projetos e políticas públicas de TI, desenvolvimento de sistemas de computação, 
                                                                desenvolvimento de soluções de informática na saúde e na educação.`}
    ]
  }
}
