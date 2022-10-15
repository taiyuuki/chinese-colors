import colors from './colors/chinese.json'
import { config } from './config'
import type { CompletionItem } from 'vscode'
import { CompletionItemKind } from 'vscode'
import jpColors from './colors/jp.json'
import { channel } from './channel'
import { arrayToRgbStr, rgbToHex } from './utils'

function isMissing(prop: string, obj: Color) {
  if (!(prop in obj)) {
    channel.appendLine(`⚠️${obj?.name ?? '自定义颜色'}缺少${prop}属性`)
    return true
  }
  return false
}
const colorsCompletion = [] as CompletionItem[]
const hexs = {} as Hexs

function parseColors() {
  if (config.chineseColors.jp) {
    colors.push(...jpColors)
  }
  if (config.chineseColors.custom.length > 0) {
    const required = [ 'name', 'phonics', 'rgb' ]
    config.chineseColors.custom.forEach((item: Color) => {
      const check = required.some(prop => {
        return isMissing(prop, item)
      })
      if (!check) {
        colors.push({
          name: item.name,
          phonics: item.phonics,
          hex: rgbToHex(item.rgb),
          rgb: item.rgb,
        })
      }
    })
  }
  const isRgb = config.chineseColors.RGB
  try {
    colors.forEach((color: Color) => {
      const hex = color.hex.toLocaleLowerCase()
      const rgb = arrayToRgbStr(color.rgb)
      hexs[hex] = color.name
      colorsCompletion.push({
        detail: (isRgb || color.rgb.length > 3) ? rgb : hex,
        documentation: color.name,
        kind: CompletionItemKind.Color,
        filterText: '#' + color.name + color.phonics,
        label: color.name,
        insertText: isRgb ? rgb : hex,
      })
    })
  }
  catch (e) {
    channel.appendLine(String(e))
  }
}
parseColors()
export { hexs, colorsCompletion }