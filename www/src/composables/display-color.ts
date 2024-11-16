import { computed, reactive } from 'vue'
import { getContrastColor } from 'src/utils'
import type { Color } from 'src/colors/type'

const color = reactive<Color>({
    rgb: [244, 0, 2],
    hex: '#f40002',
    phonic: 'zhōng guó sè',
    name: '中国色',
    type: 'red',
})
const contrastColor = computed(() => getContrastColor(color.hex))
const dark = computed(() => contrastColor.value === 'white')

function setColor(newColor: Color) {
    Object.assign(color, newColor)
    document.body.style.setProperty('--bg-color', newColor.hex)
    document.body.style.setProperty('--text-color', contrastColor.value)
    document.body.style.setProperty('--track-color', dark.value ? 'rgba(255, 255, 255, 0.26' : 'rgba(0, 0, 0, 0.26')
}

export function useDisplayColor() {

    return { color, dark, contrastColor, setColor }
}
