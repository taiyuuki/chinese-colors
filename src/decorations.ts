import type { DecorationOptions, ExtensionContext } from "vscode";
import { window, workspace, Range } from "vscode";
import colors from "./colors.json";
import { getContrastColor, throttle } from "./utils";
import { config } from "./config";

export function createDocorator(ctx: ExtensionContext) {
  const colorDecorations: DecorationOptions[] = [];
  const colorDecorationType = window.createTextEditorDecorationType({
    before: {
      width: "fit-content",
      contentText: " ",
      border: "1px solid",
      margin: "auto;border-radius:2px;vertical-align:middle;font-size:12px",
    },
    dark: {
      before: {
        borderColor: "#fff",
      },
    },
    light: {
      before: {
        borderColor: "#000",
      },
    },
  });
  let editor = window.activeTextEditor;

  function reset() {
    colorDecorations.length = 0;
    editor?.setDecorations(colorDecorationType, []);
  }

  function pushDecoration(
    colorValue: string,
    code: string,
    message: string,
    contrastColor: string
  ) {
    const reg = new RegExp(colorValue, "g");
    let match = reg.exec(code);
    while (match) {
      if (editor) {
        const start = editor.document.positionAt(match.index);
        const end = editor.document.positionAt(match.index + colorValue.length);
        colorDecorations.push({
          range: new Range(start, end),
          hoverMessage: message,
          renderOptions: {
            before: {
              color: contrastColor,
              contentText: message,
              backgroundColor: match[0],
              fontStyle: "normal",
            },
          },
        });
      }
      match = reg.exec(code);
    }
  }

  function updateDecorations() {
    if (!config.preview) {
      return;
    }
    if (!editor || !editor.document) {
      return;
    }
    const code = editor.document.getText().toLocaleLowerCase();
    if (!code) {
      return;
    }
    reset();
    colors.forEach((color) => {
      const rgb = `rgb\\(\\s*${color.rgb[0]}\\s*,\\s*${color.rgb[1]}\\s*,\\s*${color.rgb[2]}\\s*\\)`;
      const hex = color.hex;
      const contrastColor = getContrastColor(hex);
      pushDecoration(rgb, code, color.name, contrastColor);
      pushDecoration(hex, code, color.name, contrastColor);
    });
    editor.setDecorations(colorDecorationType, colorDecorations);
  }

  if (editor) {
    updateDecorations();
  }

  const triggerUpdateDecorations = throttle(updateDecorations, 500);

  window.onDidChangeActiveTextEditor(
    (currentEditor) => {
      editor = currentEditor;
      if (editor) {
        triggerUpdateDecorations();
      }
    },
    null,
    ctx.subscriptions
  );

  workspace.onDidChangeTextDocument(
    triggerUpdateDecorations,
    null,
    ctx.subscriptions
  );
}
