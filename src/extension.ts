import * as vscode from "vscode";
import { workspace, CompletionItemKind, Hover } from "vscode";
import { colors, Color } from "./colors";

// language list
const languageList = [
  "css",
  "scss",
  "sass",
  "less",
  "stylus",
  "html",
  "xml",
  "json",
  "javascript",
  "typescript",
  "javascriptreact",
  "typescriptreact",
  "vue",
  "vue-html",
];

type ColorItem = {
  detail: string;
  kind: CompletionItemKind.Color;
  filterText: string;
  label: string;
  insertText: string;
};

type ColorsMatch = {
  [key: string]: string;
};

const list = [] as ColorItem[];
const hexs = {} as ColorsMatch;
const rgbs = {} as ColorsMatch;
const configuration = workspace.getConfiguration();

// get colors
colors.forEach((color: Color) => {
  const rgb = `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`;
  hexs[color.hex] = color.name;
  rgbs[`${color.rgb[0]},${color.rgb[1]},${color.rgb[2]}`] = color.name;
  list.push({
    detail: color.name,
    kind: CompletionItemKind.Color,
    filterText: "#" + color.name + color.pinyin,
    label: color.hex,
    insertText: configuration.RGB ? rgb : color.hex,
  });
});

// 过滤rgb
function filterSubRgb(text: string, position: number): string {
  while (text[position] !== "r" && position > 0) {
    position -= 1;
    if (text[position] === ")") {
      return "";
    }
  }
  if (text.substring(position).startsWith("rgb")) {
    return text.substring(position, position + 18);
  } else {
    return "";
  }
}

// 过滤hex
function filterSubHex(text: string, position: number): string {
  if (text.length >= 7) {
    while (
      text[position] !== "#" &&
      text[position].search(/[0-9a-f]/) !== -1 &&
      position > 0
    ) {
      position -= 1;
    }
    return text.substring(position, position + 7);
  } else {
    return "";
  }
}

// 悬停提示
const provideHover = function (
  document: vscode.TextDocument,
  position: vscode.Position
) {
  const currentPosition = document.validatePosition(position).character;
  const linePrefix = document.lineAt(position).text.toLowerCase();
  const rgbReg = /rgb\((.*?)\)/;
  const hexReg = /#[0-9A-Fa-f]{6}/;
  const rgb = filterSubRgb(linePrefix, currentPosition).match(rgbReg);
  const hex = filterSubHex(linePrefix, currentPosition).match(hexReg);

  if (hex) {
    if (hex[0] in hexs) {
      return new Hover(hexs[hex[0]]);
    }
  } else if (rgb) {
    if ("1" in rgb) {
      const r = rgb[1].replace(/\s/g, "");
      return new Hover(rgbs[r]);
    }
  }
  return undefined;
};

export function activate(context: vscode.ExtensionContext) {
  const chineseColors = vscode.languages.registerCompletionItemProvider(
    languageList,
    {
      provideCompletionItems() {
        return list;
      },
    },
    "#"
  );
  const hover = vscode.languages.registerHoverProvider(languageList, {
    provideHover,
  });
  context.subscriptions.push(chineseColors, hover);
}

export function deactivate() {}
