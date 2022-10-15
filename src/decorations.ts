import { window, workspace, Range } from 'vscode'
import type { DecorationOptions, ExtensionContext  } from 'vscode'

import { getContrastColor, rgbToHex, throttle } from './utils'
import { config } from './config'
import { hexs } from './parse'

export function createDecorator(ctx: ExtensionContext) {
  const hexReg = /#[0-9a-fA-F]{6,8}/g
  const rgbReg = /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?(\s*[\d.]*\s*)?\)/g
  const colorDecorations: DecorationOptions[] = []
  const colorDecorationType = window.createTextEditorDecorationType({
    before: {
      width: 'fit-content',
      height: '1rem',
      contentText: ' ',
      border: '1px dashed;border-radius:2px;margin:0 0.2em',
      fontStyle:
        'normal;font-size:0.8rem;vertical-align:middle;line-height:0.9rem;pading:0.05rem',
    },
  })
  let editor = window.activeTextEditor

  function reset() {
    colorDecorations.length = 0
    editor?.setDecorations(colorDecorationType, [])
  }

  function pushDecoration(
    hex: string,
    range: Range
  ) {
    const contrastColor = getContrastColor(hex)
    colorDecorations.push({
      range,
      hoverMessage: hexs[hex],
      renderOptions: {
        before: {
          color: contrastColor,
          contentText: hexs[hex],
          backgroundColor: hex,
          borderColor: contrastColor,
        },
      },
    })
  }

  function updateDecorations() {
    if (!config.chineseColors.preview) {
      return
    }
    if (!editor || !editor.document) {
      return
    }
    const code = editor.document.getText().toLocaleLowerCase()
    if (!code) {
      return
    }
    reset()
    let match = hexReg.exec(code)
    while (match) {
      if (match[0] in hexs) {
        const hex = match[0]
        const start = editor.document.positionAt(match.index)
        const end = editor.document.positionAt(match.index + match[0].length)
        const range = new Range(start, end)
        pushDecoration(hex, range)
      }
      match = hexReg.exec(code)
    }
    match = rgbReg.exec(code)
    while (match) {
      const rgbArr = [ Number(match[1]), Number(match[2]), Number(match[3]) ]
      const alpha = match[4] ?? false
      if (alpha) {
        rgbArr.push(Number(alpha))
      }
      const hex = rgbToHex(rgbArr)
      if (hex in hexs) {
        const start = editor.document.positionAt(match.index)
        const end = editor.document.positionAt(match.index + match[0].length)
        const range = new Range(start, end)
        pushDecoration(hex, range)
      }
      match = rgbReg.exec(code)
    }
    editor.setDecorations(colorDecorationType, colorDecorations)
  }

  if (editor) {
    updateDecorations()
  }

  const triggerUpdateDecorations = throttle(updateDecorations, 500)

  window.onDidChangeActiveTextEditor(
    (currentEditor) => {
      editor = currentEditor
      if (editor) {
        triggerUpdateDecorations()
      }
    },
    null,
    ctx.subscriptions
  )

  workspace.onDidChangeTextDocument(
    triggerUpdateDecorations,
    null,
    ctx.subscriptions
  )
}