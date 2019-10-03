export interface User {
  turno: string;
  curso: string;
  sistema: string;
  pas1: PAS;
  pas2: PAS;
}

export interface PAS {
  p1_type: Linguas;
  score_p1: string;
  score_p2: string;
  score_red: string;
}

export enum Linguas {
  Ingles,
  Espanhol,
  Frances,
}

export interface Media {
  readonly etapa: number;
  readonly parte: string;
  readonly media: number;
  readonly dp: number;
}

export interface Curso {
  campus: string;
  turno: string;
  curso: string;
  semestre: number;
  [cotas: string]: string | number;
}
