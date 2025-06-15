export interface CSVRecord {
  [key:string]: string;
}

export interface InputData { id: number; value: number; label: string; } 

export type Field = {
  data: string[];
  label: string;
  note?: string;
  type: string;
};
