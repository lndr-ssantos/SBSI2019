import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chamada } from '../../modelos/chamada';

@IonicPage()
@Component({
  selector: 'page-codesii',
  templateUrl: 'codesii.html',
})
export class CodesiiPage {
  public chamadas: Chamada[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chamadas = [
      {header: 'Apresentação', conteudo: `Pela primeira vez na história do Simpósio Brasileiro de Sistemas de Informação (SBSI),
                                          será realizada uma competição de desenvolvimento de sistemas de informação. O
                                          tema escolhido para o SBSI 2019 é <b>Sistemas de Informação para o Apoio à
                                          Participação Cidadã</b>, um tema atual e desafiador, que pode trazer benefícios diretos
                                          para a sociedade e é também um dos temas de interesse da comunidade de sistemas
                                          de informação, discutido no I <a href="http://www.sbc.org.br/noticias/10-slideshow-noticias/2032-grand-research-challenges-in-information-systems-in-brazil-2016-2026">GranDSI-BR</a> <br>
                                          
                                          O objetivo da competição é criar um espaço no SBSI 2019 para estudantes do ensino
                                          médio/técnico e de graduação, com a participação de profissionais, apresentarem
                                          soluções inovadoras para problemas práticos, trocar experiências com a comunidade
                                          de SI, e inspirar ideias e oportunidades para novos trabalhos e/ou negócios.`},

      {header: 'Tema', conteudo: `Os temas da participação e da cidadania têm assumido grande relevância nas
                                                                      democracias ocidentais, tendo-se multiplicado, nos últimos anos, as iniciativas de
                                                                      participação provenientes da sociedade civil. O denominador comum destas iniciativas
                                                                      tem sido o de exercer uma forte pressão sobre o setor público, com o objetivo de
                                                                      reformular o sistema de direitos sociais, entendidos não mais como conjunto de
                                                                      direitos planejados e prestados pelo estado, mas como demanda de contribuição ativa
                                                                      na definição das políticas sociais e serviços públicos. A partir dos últimos anos do
                                                                      século XX, houve uma mudança substancial na abordagem à cidadania para um
                                                                      conceito que vai além da reivindicação dos direitos consagrados na constituição. <br>

                                                                      Os modelos de participação cidadã sugerem que o acesso a informação é o primeiro
                                                                      passo para alcançar a participação democrática para que os cidadãos possam ser
                                                                      ouvidos e assim, ter poder de tomar decisões. Para este fim, a participação deve ser
                                                                      apoiada por sistemas de informação transparentes. Ao considerar a necessidade de
                                                                      acesso a informação com transparência, é necessário planejar processos de forma que
                                                                      um cidadão possa entender os procedimentos realizados pelo governo incluindo a
                                                                      informação gerada, para que ele possa se tornar um participante ativo. Nesse
                                                                      contexto, existem cinco níveis de participação que consideram a relação entre os
                                                                      governos e os cidadãos através de interações que podem acontecer pela Web: <br>

                                                                      &nbsp; &nbsp; &nbsp;● <b>Oferta de Informações:</b> Disponibilizar informações ao público; <br>
                                                                      &nbsp; &nbsp; &nbsp;● <b>Coleta da Opinião Pública:</b> Empregar Tecnologias de Informação e
                                                                      Comunicação como meio de coleta de opiniões dos cidadãos para, a partir
                                                                      destas informações, tomar decisões políticas; <br>
                                                                      &nbsp; &nbsp; &nbsp;● <b>Prestação de Contas Públicas:</b> Permitir aplicar transparência e auditar as ações
                                                                      realizadas pelo governo, uma vez que as ações devem ser explicadas e
                                                                      justificadas; <br>
                                                                      &nbsp; &nbsp; &nbsp;● <b>Democracia Deliberativa:</b> É baseada na decisão politica tomada a partir de uma
                                                                      discussão mútua entre o governo e os cidadãos; <br>
                                                                      &nbsp; &nbsp; &nbsp;● <b>Democracia Direta:</b> O processo de tomada de decisão não passa por
                                                                      representantes políticos e sim pelos cidadãos que assumem uma posição de
                                                                      tomada de decisões. <br>
                                                                      O termo participação eletrônica é usado para descrever o uso de tecnologias de
                                                                      informação e comunicação para promover o engajamento dos cidadãos, tornando-os
                                                                      participantes ativos. A proposta da competição de SI inovadores é, então, criar um
                                                                      sistema de informação que atue em um ou mais dos níveis de participação cidadã
                                                                      citados acima (<b>Prover Informações</b>, <b>Pesquisas de Opinião do Púbico</b>, <b>Contabilidade</b>,
                                                                      <b>Deliberação Democrática</b> e <b>Democracia Geral</b>). Esta participação pode ser relacionada
                                                                      à mobilidade, cultura, saúde, segurança, educação, transparência, sustentabilidade
                                                                      (recursos naturais, energia, água etc.), habitação, saneamento básico, ou qualquer
                                                                      outro tema de interesse da sociedade. Ela pode ser restrita a um local, por exemplo,
                                                                      um parque, escola, universidade etc., ou de interesse geral da sociedade. É importante
                                                                      que o design seja atraente, despertando a atenção do cidadão para o tema. <br>
                                                                      Alguns sistemas e aplicativos já desenvolvidos nesse contexto que podem servir como
                                                                      inspiração são: <br>
                                                                      &nbsp; &nbsp; &nbsp;● <a href="http://portaldatransparencia.gov.br">Portal da Transparência;</a> <br>
                                                                      &nbsp; &nbsp; &nbsp;● <a href="https://www12.senado.leg.br/ecidadania">E-Cidadania;</a> <br>
                                                                      &nbsp; &nbsp; &nbsp;● <a href="https://www.delib.net/citizen_space">Citizen Space;</a> <br>
                                                                      &nbsp; &nbsp; &nbsp;● <a href="https://www.delib.net/budget_simulator">Budget Simulator;</a>`},

      {header: 'Por que participar', conteudo: `● É uma oportunidade para estudantes de participar de um evento nacional de
                                                alto impacto na comunidade de sistemas de informação; <br>
                                                ● Espaço para discutir soluções criativas para problemas práticos das nossas
                                                cidades e dos organismos que nelas coexistem (universidades, empresas, cidadãos,
                                                ruas, hospitais, praças, entre outros); <br>
                                                ● Receber feedback do seu trabalho por profissionais/acadêmicos da área; <br>
                                                ● A ideia poderá de fato se tornar útil para a sociedade; <br>
                                                ● Criar e estreitar laços - pode gerar bons frutos!`},

      {header: 'Submissões', conteudo: `<b>Das Equipes:</b> <br>
                                        ● Grupos de até 5 participantes, orientados por um professor ou profissional com
                                        mais experiência; <br>
                                        ● Cada equipe deve ter no mínimo 2 participantes e 1 orientador; <br>
                                        ● Os participantes podem ser estudantes de ensino médio/técnico e/ou
                                        graduação. Profissionais ou um professor podem complementar as equipes; <br>
                                        ● As equipes podem ser compostas somente por estudantes e orientador (que
                                        pode ser um profissional ou professor), ou mistas, com a participação de profissionais.
                                        Equipes mistas são muito bem-vindas! <br><br>
                                        
                                        <b>Processo e Submissão <br>
                                        Etapa 1: Submissão da Ideia (até 11/02/2019)</b> <br>
                                        ● Enviar um resumo com o limite de 2 (duas) páginas, no formato de artigo da
                                        <a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos">SBC</a>; <br>
                                        ● Os autores devem efetuar suas submissões eletronicamente, por meio do
                                        sistema JEMS, em formato PDF; <br>
                                        ● Nessa etapa, os autores não devem ser identificados (double blind review).
                                        Espera-se que os trabalhos submetidos contenham: <br>
                                        ● Descrição do sistema e sua contribuição tecnológica, incluindo impactos
                                        sociais; <br>
                                        ● Os produtos serão selecionados com base na significância e na originalidade da
                                        sua abordagem de solução; <br>
                                        ● Notificação dos resultados: 22/03/2019. <br><br>

                                        <b>Etapa 2: Submissão da Versão Beta do Sistema (até 29/03/2019)</b> <br>
                                        ● Enviar a versão final do resumo com o limite de 2 (duas) páginas, no formato de
                                        artigo da SBC; <br>
                                        ● Os autores devem efetuar suas submissões eletronicamente, por meio do
                                        sistema JEMS, em formato PDF; <br>
                                        ● Link do repositório Git do produto executável ou o link para acesso ao sistema
                                        (caso disponível on-line); <br>
                                        ● Preparar um vídeo de até 5 minutos mostrando o funcionamento do sistema e
                                        um cenário em que o mesmo pode ser útil. <br><br>

                                        <b>Etapa 3: Apresentação no Evento: 20-24/05/2019</b>
                                        ● Um dos autores deve obrigatoriamente se inscrever no SBSI 2019 e apresentar
                                        o trabalho aprovado em exposição coletiva e interativa. Os trabalhos da competição
                                        serão apresentados em formato de vídeo em uma sessão técnica para discussão com
                                        os participantes; <br>
                                        ● Durante o SBSI, um júri formado por representantes da indústria e da academia
                                        escolherá os 3 projetos vencedores dentre os finalistas; <br>
                                        ● Os critérios para seleção dos projetos vencedores incluirão: contribuição do
                                        trabalho para o apoio à participação cidadã, originalidade da abordagem de solução e
                                        facilidade de uso do sistema por um usuário final; <br>
                                        ● Os trabalhos premiados receberão: 1° Lugar: R$ 2.000,00; 2° Lugar: R$ 1.000,00
                                        e 3° Lugar: R$ 500,00; <br>
                                        ● <b>IMPORTANTE:</b> Pelo menos 1 representante de cada projeto deverá estar
                                        presente durante o evento para fazer a apresentação de seu projeto.`},

      {header: 'Datas Importantes', conteudo: `Prazo de submissão: 11/02/2019; <br>
                                              Notificação dos resultados: 22/03/2019; <br>
                                              Submissão dos Finalistas: 29/03/2019; <br>
                                              Apresentação dos finalistas no SBSI 2019: 20-24/05/2019`},

      {header: 'Coordenação', conteudo: `Fabio Gomes Rocha (UNIT) - gomesrocha@gmail.com; <br>
                                        Anderson Barroso (UNIT) - giga.anderson@gmail.com; <br>
                                        Luis Rivero Cabrejos (UFMA) - luisrivero@nca.ufma.br`}
    ]
  }
}
