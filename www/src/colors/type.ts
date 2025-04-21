export type ColorJson = {
    rgb: number[];
    phonic: string;
    type: string;
    name: string;
    hex: string;
}

export type Color = ColorJson & {
    similarColors: Color[];
    contrastColors: Color[];
}
