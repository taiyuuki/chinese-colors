import { nextTick, reactive, ref } from 'vue'
import { blue } from 'src/colors/blue'
import { red } from'src/colors/red'
import { yellow } from'src/colors/yellow'
import { green } from'src/colors/green'
import { purple } from'src/colors/purple'
import { brown } from'src/colors/brown'
import { bwg } from 'src/colors/bwg'
import type { Color, ColorJson } from 'src/colors/type'

type Similar = {
    name: string;
    similarity: number;
}

type Contrast = {
    name: string;
    contrast: number;
}
  
// 颜色相似度
function calculateSimilarity(color1: ColorJson, color2: ColorJson): number {
    const [r1, g1, b1] = color1.rgb
    const [r2, g2, b2] = color2.rgb

    return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2)
}
  
// 相对亮度（WCAG标准）
function getLuminance(rgb: number[]): number {
    const [r, g, b] = rgb.map(c => {
        const scaled = c / 255

        return scaled <= 0.04045 
            ? scaled / 12.92 
            : Math.pow((scaled + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
  
// 对比度
function calculateContrast(color1: ColorJson, color2: ColorJson): number {
    const l1 = getLuminance(color1.rgb)
    const l2 = getLuminance(color2.rgb)

    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

// 处理颜色列表
function processColors(colors: ColorJson[]): Color[] {
    const map = new Map<string, ColorJson & { similars: Similar[], contrasts: Contrast[] }>()

    for (const color of colors) {
        const c1 = {
            ...color,
            similars: [] as Similar[],
            contrasts: []as Contrast[],
        }

        for (const other of colors) {
            if (color === other) {
                continue
            }

            const similarity = calculateSimilarity(color, other)
            const contrast = calculateContrast(color, other)
            c1.similars.push({
                name: other.name,
                similarity,
            })
            c1.contrasts.push({ 
                name: other.name,
                contrast,
            })
        }
        c1.similars = c1.similars.sort((a, b) => a.similarity - b.similarity).slice(0, 10)
        c1.contrasts = c1.contrasts.sort((a, b) => b.contrast - a.contrast).slice(0, 10)

        map.set(color.name, c1)
    }

    const newMap = new Map<string, Color>()
    for (const [name, c1] of map) {
        const c2 = {
            ...c1,
            similarColors: [],
            contrastColors: [],
        }
        newMap.set(name, c2)
    }

    for (const [name, c2] of newMap) {
        const c1 = map.get(name)!
        c2.similarColors = c1.similars.map(s => newMap.get(s.name)!)
        c2.contrastColors = c1.contrasts.map(s => newMap.get(s.name)!)
    }

    return Array.from(newMap.values())
}

const colors = processColors([...blue, ...red, ...yellow, ...green, ...purple, ...brown, ...bwg])
const series = {
    red: colors.filter(c => c.type === 'red'),
    blue: colors.filter(c => c.type === 'blue'),
    yellow: colors.filter(c => c.type === 'yellow'),
    green: colors.filter(c => c.type === 'green'),
    purple: colors.filter(c => c.type === 'purple'),
    brown: colors.filter(c => c.type === 'brown'),
    bwg: colors.filter(c => c.type === 'bwg'),
}
const colorSeries = reactive<Color[]>([])
const currentType = ref<keyof typeof colorMap>('red')

const colorMap = reactive({
    red: {
        label: '红色系',
        color: 'red-10',
    },
    blue: {
        label: '蓝色系',
        color: 'blue-10',
    },
    yellow: {
        label: '黄色系',
        color: 'yellow-10',
    },
    green: {
        label: '绿色系',
        color: 'green-10',
    },
    purple: {
        label: '紫色系',
        color: 'purple-10',
    },
    brown: {
        label: '棕色系',
        color: 'brown-10',
    },
    bwg: {
        label: '黑白灰系',
        color: 'black',
    },
})

const STEP = 20
let point = 0
function setColorSeries(type: string) {
    if (type !== currentType.value) {
        point = 0
        currentType.value = type as keyof typeof colorMap
        colorSeries.length = 0
    }
    else if (point >= series[currentType.value].length) {
        return
    }

    for (let i = point; i < point + STEP && i < series[currentType.value].length; i++) {

        colorSeries.push(series[currentType.value][i])
    }

    point += STEP
    nextTick(() => {
        setTimeout(() => {
            setColorSeries(currentType.value)
        }, 100)
    })
}

setColorSeries('red')

export { colorSeries, currentType, setColorSeries, colorMap }
