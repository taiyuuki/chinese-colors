import colors from "./colors/chinese.json";
import { config } from "./config";
import { CompletionItem, CompletionItemKind } from "vscode";
import jpColors from "./colors/jp.json";
import { channel } from "./channel";

function isMissing(prop: string) {
  if (!(prop in config.custom)) {
    channel.appendLine(`⚠️自定义颜色缺少${prop}属性`);
    return true;
  }
  return false;
}
const colorsList = [] as CompletionItem[];
const hexs = {} as Hexs;
const decorationOrigin = {} as DecorationOrigin;

function parseColors() {
  if (config.jp) {
    colors.push(...jpColors);
  }
  if (config.custom.length > 0) {
    const required = ["name", "hex", "phonics", "rgb"];
    const check = required.some((prop) => {
      return isMissing(prop);
    });
    if (!check) {
      colors.push(...jpColors);
    }
  }
  const isRgb = config.RGB;
  try {
    colors.forEach((color: Color) => {
      const hex = color.hex.toLocaleLowerCase();
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
  } catch (e) {
    channel.appendLine(String(e));
  }
}
parseColors();
export { hexs, colorsList, decorationOrigin };
