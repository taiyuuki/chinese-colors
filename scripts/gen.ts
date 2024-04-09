import fs from 'node:fs'
import { pinyin } from 'pinyin-pro'
import blue from '../json/blue.json'
import brown from '../json/brown.json'
import red from '../json/red.json'
import yellow from '../json/yellow.json'
import green from '../json/green.json'
import bwg from '../json/bwg.json'
import purple from '../json/purple.json'

const COLOR_NAME = {
    blue: ['蓝', 'lan'],
    brown: ['棕', 'zong'],
    red: ['红', 'hong'],
    yellow: ['黄', 'huang'],
    green: ['绿', 'lv'],
    bwg: ['黑白灰', 'heibaihui'],
    purple: ['紫', 'zi'],
}

function jsonToTs(json: { name: string, hex: string }[], type: keyof typeof COLOR_NAME) {
    const colors = json.map((color) => {
        const r = Number.parseInt(color.hex.slice(1, 3), 16)
        const g = Number.parseInt(color.hex.slice(3, 5), 16)
        const b = Number.parseInt(color.hex.slice(5, 7), 16)
        let phonic = pinyin(color.name, { toneType: 'none', v: true, type: 'array' }).join('')
        if (type !== 'bwg') {
            phonic = color.name.includes(COLOR_NAME[type][0]) ? phonic : phonic += COLOR_NAME[type][1]
        }

        return {
            rgb: [r, g, b],
            phonic,
            type,
            ...color,
        }
    })
    fs.writeFileSync(`./src/colors/${type}.ts`, `export const ${type} = ${JSON.stringify(colors, null, 4)}`)
    fs.writeFileSync(`./res/webview/${type}.js`, `const ${type} = ${JSON.stringify(colors, null, 4)}`)
}

jsonToTs(blue, 'blue')
jsonToTs(brown, 'brown')
jsonToTs(red, 'red')
jsonToTs(yellow, 'yellow')
jsonToTs(green, 'green')
jsonToTs(bwg, 'bwg')
jsonToTs(purple, 'purple')
