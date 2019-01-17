import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '../../modelos/chamada';

/**
 * Generated class for the FesiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fesi',
  templateUrl: 'fesi.html',
})
export class FesiPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
       {header: 'Apresentação', conteudo: `<b>Projetos Pedagógicos e Práticas de Ensino-Aprendizagem em SI</b> <br>
                                          O Fórum de Educação em Sistemas de Informação (FESI) tem por objetivo propiciar a discussão sobre a formação em 
                                          Sistemas de Informação no âmbito da graduação e pós-graduação no Brasil. O FESI é realizado junto ao SBSI, sempre que 
                                          questões relevantes para a formação em SI precisam ser discutidas com a comunidade de SI no Brasil. <br>
                                          Em 2017, a <a href="http://www.sbc.org.br/educacao/diretoria-de-educacao">Diretoria de Educação da SBC</a> concluiu a 
                                          elaboração dos <a href="http://www.sbc.org.br/noticias/10-slideshow-noticias/2018-sbc-apresenta-referenciais-de-formacao-para-os-cursos-de-graduacao-em-computacao">Referenciais de Formação para os Cursos de Graduação em Computação no Brasil</a>, incluindo os 
                                          <b>Referenciais de Formação para o Bacharelado em Sistemas de Informação</b>. O lançamento dos Referenciais de Formação pela 
                                          SBC levou os cursos de SI no Brasil a refletirem sobre seus objetivos de formação, sobre as competências a serem desenvolvidas 
                                          por seus egressos e sobre a composição de seus Projetos Pedagógicos de Curso. <br>
                                          O <b>VI FESI</b> tem como objetivo reunir coordenadores de cursos, professores, alunos e profissionais da indústria para: <br><br>
                                          
                                          &nbsp; &nbsp; &nbsp;●	<b>Exercitar o uso dos Referenciais de Formação em Sistemas de Informação para a composição dos projetos pedagógicos dos cursos de graduação em SI;</b> e <br>
                                          &nbsp; &nbsp; &nbsp;●	Palestras e debates sobre <b>como criar experiências de realidade prática em disciplinas dos cursos de SI.</b> <br><br>
                                          
                                          Se você é coordenador de curso, aluno ou professor de graduação ou pós-graduação em SI, participe do VI FESI e contribua com as discussões e suas experiências. Você estará contribuindo para a definição das estratégias de educação em SI no país.
                                          Detalhes sobre a programação em breve.`},

      {header: 'Organização', conteudo: `Renata Araujo (CE-SI/Diretora de Educação da SBC) <br>
                                        Fernanda Gomes (UNIT)`}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FesiPage');
  }

}
