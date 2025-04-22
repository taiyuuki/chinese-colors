export function getContrastColor(hexcolor: string) {
    const r = Number.parseInt(hexcolor.substring(1, 2), 16)
    const g = Number.parseInt(hexcolor.substring(3, 4), 16)
    const b = Number.parseInt(hexcolor.substring(5, 6), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000

    return yiq >= 8 ? 'black' : 'white'
}

export function rgbToCMYK(r: number, g: number, b: number) {

    const rPrime = r / 255
    const gPrime = g / 255
    const bPrime = b / 255

    let k = 1 - Math.max(rPrime, gPrime, bPrime)
    let c = (1 - rPrime - k) / (1 - k)
    let m = (1 - gPrime - k) / (1 - k)
    let y = (1 - bPrime - k) / (1 - k)

    if (Number.isNaN(c)) c = 0
    if (Number.isNaN(m)) m = 0
    if (Number.isNaN(y)) y = 0

    c = Math.round(c * 100)
    m = Math.round(m * 100)
    y = Math.round(y * 100)
    k = Math.round(k * 100)

    return { c, m, y, k }
}

export function rgbToHSV(r: number, g: number, b: number) {
    const rPrime = r / 255
    const gPrime = g / 255
    const bPrime = b / 255

    const max = Math.max(rPrime, gPrime, bPrime)
    const min = Math.min(rPrime, gPrime, bPrime)
    const delta = max - min

    let h = 0
    let s = 0
    let v = max

    if (delta > 0) {
        s = delta / max
        if (rPrime === max) {
            h = (gPrime - bPrime) / delta
        }
        else if (gPrime === max) {
            h = 2 + (bPrime - rPrime) / delta
        }
        else {
            h = 4 + (rPrime - gPrime) / delta
        }
        h *= 60
        if (h < 0) {
            h += 360
        }
    }

    s = Math.round(s * 100)
    v = Math.round(v * 100)
    h = Math.round(h)

    return { h, s, v }
}

export function rgbToHEX(r: number, g: number, b: number, a: number = 1) {
    const rHex = r.toString(16)
    const gHex = g.toString(16)
    const bHex = b.toString(16)
    const aHex = Math.round(a * 255).toString(16)

    return `#${rHex.padStart(2, '0')}${gHex.padStart(2, '0')}${bHex.padStart(2, '0')}${aHex.padStart(2, '0')}`
}

export function rgbToHSL(r: number, g: number, b: number) {
    const rPrime = r / 255
    const gPrime = g / 255
    const bPrime = b / 255

    const max = Math.max(rPrime, gPrime, bPrime)
    const min = Math.min(rPrime, gPrime, bPrime)
    const delta = max - min

    let h = 0
    let s = 0
    let l = (max + min) / 2

    if (delta > 0) {
        s = delta / (1 - Math.abs(2 * l - 1))
        if (rPrime === max) {
            h = (gPrime - bPrime) / delta
        }
        else if (gPrime === max) {
            h = 2 + (bPrime - rPrime) / delta
        }
        else {
            h = 4 + (rPrime - gPrime) / delta
        }
        h *= 60
        if (h < 0) {
            h += 360
        }
    }

    s = Math.round(s * 100)
    l = Math.round(l * 100)
    h = Math.round(h)

    return { h, s, l }
}

export const bubbleMessage = function() {

    return function(e: MouseEvent, mes: string) {
    
        const pageX = e.pageX,
            pageY = e.pageY
        const showEl = document.createElement('span')
        showEl.className = 'bubble-message'
        document.body.appendChild(showEl)
        showEl.textContent = mes
        showEl.addEventListener('animationend', function() {
            document.body.removeChild(showEl)
        })
        showEl.style.left = `${pageX - showEl.clientWidth / 2}px`
        showEl.style.top = `${pageY - showEl.clientHeight - 5}px`
    }
}()
