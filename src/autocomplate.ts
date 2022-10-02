import * as vscode from "vscode";
import { languages } from "vscode";
import type { CancellationToken } from "vscode";
import { colorsList } from "./parse";

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

export const chineseColors = languages.registerCompletionItemProvider(
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
      return colorsList;
    },
  },
  "#",
  ":"
);
