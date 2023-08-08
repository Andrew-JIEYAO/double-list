export interface DoubleSet {
  title: string;
  subTitle: string;
  groups: Group[];
}

export interface Group {
  name: string;
  items: CodeName[];
}

export interface CodeName {
  name: string;
  code: string;
}
