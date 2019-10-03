<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Dados Iniciais</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">PAS 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">PAS 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Resultado</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-5">
          <v-form>
            <v-select
              v-model="user.curso"
              :placeholder="user.curso"
              :items="courseData"
              label="Curso"
              outline
            ></v-select>

            <v-select
              v-model="user.turno"
              :placeholder="user.turno"
              :items="turnoData"
              label="Turno"
              outline
            ></v-select>

            <v-select
              v-model="modeloSis"
              :items="possiveisSistemas"
              items-text="text"
              items-value="val"
              return-object
              :placeholder="user.sistema"
              label="Sistema de entrada"
              outline
            ></v-select>
          </v-form>
        </v-card>

        <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5">
          <v-card-title>PAS 1</v-card-title>

          <v-form>
            <v-select
              v-model="user.pas1.p1_type"
              :items="language"
              label="Lingua da prova 1"
              outline
              item-text="text"
              item-value="model"
            ></v-select>
            <v-text-field
              v-model="user.pas1.score_p1"
              :placeholder="String(user.pas1.score_p1)"
              label="Nota da prova de linguas do PAS 1"
              outline
            ></v-text-field>
            <v-text-field
              v-model="user.pas1.score_p2"
              :placeholder="String(user.pas1.score_p2)"
              label="Nota da prova de conteúdo do PAS 1"
              outline
            ></v-text-field>
            <v-text-field
              v-model="user.pas1.score_red"
              :placeholder="String(user.pas1.score_red)"
              label="Nota da redação do PAS 1"
              outline
            ></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

            <v-btn flat @click="e1 = 1">Cancel</v-btn>
          </v-card-actions>

        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5">
          <v-card-title>PAS 2</v-card-title>
          <v-form>
            <v-select
              v-model="user.pas2.p1_type"
              :items="language"
              label="Lingua da prova 1"
              outline
              item-text="text"
              item-value="model"
            ></v-select>
            <v-text-field
              v-model="user.pas2.score_p1"
              :placeholder="String(user.pas2.score_p1)"
              label="Nota da prova de linguas do PAS 2"
              outline
            ></v-text-field>
            <v-text-field
              v-model="user.pas2.score_p2"
              :placeholder="String(user.pas2.score_p2)"
              label="Nota da prova de conteúdo do PAS 2"
              outline
            ></v-text-field>
            <v-text-field
              v-model="user.pas2.score_red"
              :placeholder="String(user.pas2.score_red)"
              label="Nota da redação do PAS 2"
              outline
            ></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn color="primary" @click="e1 = 4; setScores()">Continue</v-btn>
            <v-btn flat @click="e1 = 1">Cancel</v-btn>
          </v-card-actions>
        </v-card>
        
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-5">
          <v-card-text>
            Voce precisa tirar {{s1}} para passar em {{user.curso}} no primeiro semestre
            e {{s2}} para passar em {{user.curso}} no segundo semestre.
          </v-card-text>
        </v-card>

        <v-btn color="primary" @click="e1 = 1">Inicio</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User, Linguas, PAS, Media, Curso } from '@/types';
import courseBase from '@/assets/cursos.json';
import mediaBase from '@/assets/media.json';

@Component
export default class Calculator extends Vue {
  private e1: number;
  private user: User;
  private modeloSis: {text: string, val: string};
  private s1: number;
  private s2: number;
  private language: Array<{ text: string; model: Linguas }>;
  private possiveisSistemas: Array<{ text: string; val: string }>;

  constructor() {
    super();
    this.e1 = 0;
    this.s1 = 0;
    this.s2 = 0;
    this.modeloSis = {text: 'Sistema Universal', val: 'universal'};
    this.possiveisSistemas = [
      {text: 'Cotas para Negros', val: 'cotas_negros'},
      {text: 'Escola Pública: Baixa Renda e PPI', val: 'baixa_renda_ppi'},
      {text: 'Escola Pública: Baixa Renda, PPI e PcD"', val: 'baixa_renda_ppi_pcd'},
      {text: 'Escola Pública: Baixa Renda', val: 'baixa_renda'},
      {text: 'Escola Pública: Baixa Renda e PcD', val: 'baixa_renda_pcd'},
      {text: 'Escola Pública: PPI', val: 'ppi' },
      {text: 'Escola Pública: PPI e PcD', val: 'ppi_pcd'},
      {text: 'Escola Pública ', val: 'ecola_publica'},
      {text: 'Escola Pública: PcD', val: 'pcd'},
      {text: 'Sistema Universal', val: 'universal'},
    ];
    this.user = {
      turno: '',
      curso: '',
      sistema: '',
      pas1: {
        p1_type: Linguas.Ingles,
        score_p1: '',
        score_p2: '',
        score_red: '',
      },
      pas2: {
        p1_type: Linguas.Ingles,
        score_p1: '',
        score_p2: '',
        score_red: '',
      },
    };
    this.language = [
      { text: 'Inglês', model: Linguas.Ingles },
      { text: 'Espanhol', model: Linguas.Espanhol },
      { text: 'Francês', model: Linguas.Frances },
    ];
  }

  public tolerantParse(word: string | number): number {
    if (typeof word === 'string') {
      if (word === '(*)') {
        return -500;
      } else {
        return parseFloat(word);
      }
    } else {
      return word;
    }
  }

  public chooseAndConvert(sistema: string, cursos: Curso[]): number {
    return this.tolerantParse(cursos.map((element) => element[sistema])[0]);
  }
  public setScores() {
    this.user.sistema = this.modeloSis.val;
    this.s1 = this.calculateScore(this.user, 1);
    this.s2 = this.calculateScore(this.user, 2);
  }
  public calculateScore(data: User, semestre: number): number {
    const argumento1: number = this.calculateArgument(data.pas1, 1);
    const argumento2: number = this.calculateArgument(data.pas2, 2);
    const temp = this.courses
      .filter((element) => element.curso === data.curso && element.semestre === semestre && element.turno === data.turno);
    const argumentoSemestre: number = this.chooseAndConvert(data.sistema, temp);
    const retorno = (argumentoSemestre - (argumento2 * 2) - argumento1) / 3;

    return retorno;
  }

  public calculateArgument(data: PAS, etapa: number): number {
    let argument = 0;
    const step = this.medias.filter((element) => element.etapa === etapa);
    const pLinguas = step.filter((element) => {
      if (data.p1_type === Linguas.Ingles) {
        return element.parte === 'Ingles';
      } else if (data.p1_type === Linguas.Espanhol) {
        return element.parte === 'Espanhol';
      } else {
        return element.parte === 'Frances';
      }
    })[0];
    const conteudo = step.filter((element) => element.parte === 'parte 2')[0];
    const redacao = step.filter((element) => element.parte === 'Redação')[0];

    argument += ((parseFloat(data.score_p1) - pLinguas.media) / pLinguas.dp) * 0.072;
    argument += ((parseFloat(data.score_p2) - conteudo.media) / conteudo.dp) * 0.828;
    argument += ((parseFloat(data.score_red) - redacao.media) / redacao.dp) * 0.1;

    return argument;
  }
  get courseData(): string[] {
    return [...new Set(this.courses.map((element) => element.curso))];
  }

  get turnoData(): string[] {
    if (this.user.curso === '') {
      return [''];
    } else {
      return this.courses
        .filter((element) => element.curso === this.user.curso)
        .map((element) => element.turno);
    }
  }

  get courses(): Curso[] {
    return courseBase;
  }

  get medias(): Media[] {
    return mediaBase;
  }
}
</script>