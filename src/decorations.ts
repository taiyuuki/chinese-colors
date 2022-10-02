import { DecorationOptions, ExtensionContext } from "vscode";
import { window, workspace, Range } from "vscode";
import { getContrastColor, throttle } from "./utils";
import { config } from "./config";
import { hexs, decorationOrigin } from "./parse";

export function createDocorator(ctx: ExtensionContext) {
  const colorDecorations: DecorationOptions[] = [];
  const colorDecorationType = window.createTextEditorDecorationType({
    textDecoration: "none;margin-left:0.2rem",
    before: {
      width: "fit-content",
      height: "1rem",
      contentText: " ",
      fontStyle:
        "normal;font-size:0.8em;vertical-align:middle;line-height:1rem",
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
        const end = editor.document.positionAt(match.index + match[0].length);
        colorDecorations.push({
          range: new Range(start, end),
          hoverMessage: message,
          renderOptions: {
            before: {
              color: contrastColor,
              contentText: message,
              backgroundColor: match[0],
              border: `1px dashed ${contrastColor};border-radius:2px;`,
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
    for (let hex in decorationOrigin) {
      const alpha = decorationOrigin[hex][3] ?? false;
      let rgb = "rgb";
      rgb += alpha ? "a" : "";
      rgb += `\\(\\s*${decorationOrigin[hex][0]}\\s*,\\s*${decorationOrigin[hex][1]}\\s*,\\s*${decorationOrigin[hex][2]}\\s*`;
      rgb += alpha ? `,\\s*${alpha}\\s*\\)` : "\\)";
      const contrastColor = getContrastColor(hex);
      pushDecoration(rgb, code, hexs[hex], contrastColor);
      pushDecoration(hex, code, hexs[hex], contrastColor);
    }
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
