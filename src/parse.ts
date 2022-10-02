import colors from "./colors/chinese.json";
import { config } from "./config";
import { CompletionItemKind } from "vscode";
import jpColors from "./colors/jp.json";

if (config.jp) {
  colors.push(...jpColors);
}
if (config.custom.length > 0) {
  colors.push(...config.custom);
}

const colorsList = [] as ColorItem[];
const hexs = {} as ColorsMatch;
const decorationOrigin = {} as DecorationOrigin;

function parseColors() {
  colors.forEach((color: Color) => {
    const hex = color.hex.toLocaleLowerCase();
    const isRgb = config.RGB;
    const alpha = color.rgb[3] ?? false;
    let rgb = "rgb";
    rgb += alpha ? "a" : "";
    rgb += `(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}`;
    rgb += alpha ? `, ${color.rgb[3]})` : ")";
    hexs[hex] = color.name;
    colorsList.push({
      detail: isRgb ? rgb : hex,
      documentation: color.name,
      kind: CompletionItemKind.Color,
      filterText: "#" + color.name + color.phonics,
      label: color.name,
      insertText: isRgb ? rgb : hex,
    });
    decorationOrigin[hex] = color.rgb;
  });
}
parseColors();
export { hexs, colorsList, decorationOrigin };
