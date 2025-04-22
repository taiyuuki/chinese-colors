import { computed, reactive, watch } from 'vue'
import { getContrastColor } from 'src/utils'
import type { Color } from 'src/colors/type'

const color = reactive<Color>({
    rgb: [244, 0, 2],
    hex: '#f40002',
    phonic: 'zhōng guó sè',
    name: '中国色',
    type: 'red',
    contrastColors: [],
    similarColors: [],
})
const contrastColor = computed(() => getContrastColor(color.hex))
const dark = computed(() => contrastColor.value === 'white')
const trackColor = computed(() => dark.value ? 'rgba(255, 255, 255, 0.26)' : 'rgba(0, 0, 0, 0.26)')
const unselectedColor = computed(() => dark.value ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)')

function setColor(newColor: Color) {
    Object.assign(color, newColor)
}

watch(color, () => {
    document.body.style.setProperty('--bg-color', color.hex)
    document.body.style.setProperty('--text-color', contrastColor.value)
    document.body.style.setProperty('--track-color', trackColor.value)
    document.body.style.setProperty('--unselected-color', unselectedColor.value)
})

export function useDisplayColor() {

    return { color, dark, contrastColor, setColor, trackColor }
}
