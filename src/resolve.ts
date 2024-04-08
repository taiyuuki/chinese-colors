import type { CompletionItem } from 'vscode'
import { CompletionItemKind, workspace } from 'vscode'
import { blue, brown, bwg, green, purple, red, yellow } from './webcolors'
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

function resolveColors(colors: Color[]) {
    const config = workspace.getConfiguration()
    if (config.chineseColors.custom.length > 0) {
        const required = ['name', 'phonic', 'rgb']
        config.chineseColors.custom.forEach((item: Color) => {
            const check = required.some((prop) => {
                return isMissing(prop, item)
            })
            if (!check) {
                colors.push({
                    name: item.name,
                    phonic: item.phonic,
                    hex: rgbToHex(item.rgb),
                    rgb: item.rgb,
                    type: 'custom',
                })
            }
        })
    }
    const isRgb = config.chineseColors.RGB
    try {
        colors.forEach((color) => {
            const hex = color.hex.toLocaleLowerCase()
            const rgb = arrayToRgbStr(color.rgb)
            hexs[hex] = color.name
            colorsCompletion.push({
                detail: (isRgb || color.rgb.length > 3) ? rgb : hex,
                documentation: color.name,
                kind: CompletionItemKind.Color,
                filterText: `#${color.name}${color.phonic}`,
                label: color.name,
                insertText: isRgb ? rgb : hex,
            })
        })
    }
    catch (e) {
        channel.appendLine(String(e))
    }
}
resolveColors(blue)
resolveColors(green)
resolveColors(bwg)
resolveColors(purple)
resolveColors(red)
resolveColors(yellow)
resolveColors(brown)

export { hexs, colorsCompletion }
