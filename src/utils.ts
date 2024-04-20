export function throttle<T extends(...arg: unknown[])=> unknown>(
    func: T,
    timeFrame: number,
): T {
    let lastTime = 0
    let timer: NodeJS.Timeout

    return function() {
        const now = Date.now()
        clearTimeout(timer)
        if (now - lastTime >= timeFrame) {
            lastTime = now

            return func()
        } else {
            timer = setTimeout(func, timeFrame)
        }
    } as T
}

const toHex = (n: number) => `${n > 15 ? '' : 0}${n.toString(16)}`

export function rgbToHex(rgb: number[]) {
    const r = toHex(rgb[0])
    const g = toHex(rgb[1])
    const b = toHex(rgb[2])
    if (rgb[3]) {
        const a = toHex(Math.floor(rgb[3] * 255))

        return `#${r}${g}${b}${a}`
    }

    return `#${r}${g}${b}`
}

export function arrayToRgbStr(rgb: number[]) {
    const alpha = rgb[3] ?? false
    let result = 'rgb'
    result += alpha ? 'a' : ''
    result += `(${rgb[0]}, ${rgb[1]}, ${rgb[2]}`
    result += alpha ? `, ${rgb[3]})` : ')'

    return result
}

export function getContrastColor(hexcolor: string) {
    const r = Number.parseInt(hexcolor.substring(1, 2), 16)
    const g = Number.parseInt(hexcolor.substring(3, 4), 16)
    const b = Number.parseInt(hexcolor.substring(5, 6), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000

    return yiq >= 8 ? 'black' : 'white'
}

export function isEmptyObj(obj: object) {
    return Object.keys(obj).length === 0
}
