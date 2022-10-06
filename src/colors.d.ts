declare interface Color {
  rgb: number[];
  hex: string;
  name: string;
  phonics: string;
}

declare interface Hexs {
  [key: string]: string;
}

declare interface Rgbs {
  [key: string]: string;
}

declare interface DecorationOrigin {
  [key: string]: number[];
}
