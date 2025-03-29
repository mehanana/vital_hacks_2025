export interface Disorder {
  name: string;
  symptoms: string[];
}

export interface DisordersData {
  [key: string]: string[];
}

export interface RelatedSymptoms {
  [key: string]: string[];
}

export interface Result {
  disorder: string;
  percentage: number;
} 