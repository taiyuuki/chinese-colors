import * as vscode from "vscode";
import type { CancellationToken } from "vscode";
import { CompletionItemKind, languages } from "vscode";
import colors from "./colors.json";
import { createDocorator } from "./decorations";
import { config } from "./config";

// 支持的语言列表
const languageList: string[] = [
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

const list = [] as ColorItem[];
const hexs = {} as ColorsMatch;
const rgbs = {} as ColorsMatch;

// 获取颜色
colors.forEach((color: Color) => {
  const isRgb = config.RGB;
  const rgb = `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`;
  hexs[color.hex] = color.name;
  rgbs[`${color.rgb[0]},${color.rgb[1]},${color.rgb[2]}`] = color.name;
  list.push({
    detail: isRgb ? rgb : color.hex,
    documentation: color.name,
    kind: CompletionItemKind.Color,
    filterText: "#" + color.name + color.pinyin,
    label: color.name,
    insertText: isRgb ? rgb : color.hex,
  });
});

// 忽略
function findPound(text: string, position: number): boolean {
  let count = 7;
  while (count >= 0 && position >= 0) {
    if (text[position] === "#") {
      return true;
    }
    count--;
    position -= 1;
  }
  return false;
}

export function activate(context: vscode.ExtensionContext) {
  const chineseColors = languages.registerCompletionItemProvider(
    languageList,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: CancellationToken
      ) {
        const linePrefix = document.lineAt(position).text.toLowerCase();
        if (!findPound(linePrefix, position.character)) {
          token.isCancellationRequested = true;
        }
        return list;
      },
    },
    "#",
    ":"
  );
  createDocorator(context);

  context.subscriptions.push(chineseColors);
}

export function deactivate() {}
