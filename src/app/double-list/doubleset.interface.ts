export interface DoubleSet {
  title: string;
  subTitle: string;
  groups: Group[];
}

export interface Group {
  name: string;
  items: Coding[];
}

export interface Coding {
  system?: string;
  version?: string;
  code: string;
  display: string;
  userSelected?: boolean;
}
