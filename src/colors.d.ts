declare interface Color {
  rgb: number[];
  hex: string;
  name: string;
  phonics: string;
}

declare interface ColorItem {
  detail: string;
  documentation: string;
  kind: number;
  filterText: string;
  label: string;
  insertText: string;
}

declare interface ColorsMatch {
  [key: string]: string;
}

declare interface DecorationOrigin {
  [key: string]: number[];
}
