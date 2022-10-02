import * as vscode from "vscode";
import { createDocorator } from "./decorations";
import { chineseColors } from "./autocomplate";

export function activate(context: vscode.ExtensionContext) {
  createDocorator(context);
  context.subscriptions.push(chineseColors);
}

export function deactivate() {}
