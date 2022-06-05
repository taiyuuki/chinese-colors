// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { workspace, CompletionItemKind } from "vscode";
import { colors, Color } from "./colors";

type ColorItem = {
  detail: string;
  kind: CompletionItemKind.Color;
  filterText: string;
  label: string;
  insertText: string;
};

export function activate(context: vscode.ExtensionContext) {
  const cc = vscode.languages.registerCompletionItemProvider(
    [
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
    ],
    {
      provideCompletionItems() {
        const list = [] as ColorItem[];
        const configuration = workspace.getConfiguration();

        colors.forEach((color: Color) => {
          list.push({
            detail: color.name,
            kind: CompletionItemKind.Color,
            filterText: "#" + color.name + color.pinyin,
            label: color.hex,
            insertText: configuration.RGB
              ? `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`
              : color.hex,
          });
        });
        return list;
      },
    },
    "#"
  );
  context.subscriptions.push(cc);
}

// this method is called when your extension is deactivated
export function deactivate() {}
