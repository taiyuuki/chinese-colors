import { nextTick, reactive, ref } from 'vue'
import { blue } from 'src/colors/blue'
import { red } from'src/colors/red'
import { yellow } from'src/colors/yellow'
import { green } from'src/colors/green'
import { purple } from'src/colors/purple'
import { brown } from'src/colors/brown'
import { bwg } from 'src/colors/bwg'
import type { Color } from 'src/colors/type'

const series = {
    red,
    blue,
    yellow,
    green,
    purple,
    brown,
    bwg,
}
const colorSeries = reactive<Color[]>([])
const currentType = ref<keyof typeof colorMap>('red')
const STEP = 10
let point = 0

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

function setColorSeries(type: keyof typeof colorMap) {
    if (type !== currentType.value) {
        point = 0
        currentType.value = type
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
