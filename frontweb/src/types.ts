export enum Gender {
  MALE = 'Masculino',
  FEMALE = 'Feminino',
  OTHER = 'Outro'
}

export type Store = {
  id: number;
  name: string;
};

export type PieChartConfig = {
  labels: Gender[];
  series: number[];
};

export type SalesByGender = {
  gender: Gender;
  sum: number;
};
