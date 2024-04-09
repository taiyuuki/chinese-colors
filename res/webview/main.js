const $colors = document.getElementById('colors')
const origin_colors = {blue, brown, red, yellow, green, bwg, purple}
$colors.style = 'display: flex;flex-wrap: wrap;items-align: center;text-align: center;'
$colors.id = 'colors'

let curType = ''
function pushColor(e, type) {
    curType = type
    const search = document.getElementById('search')
    const keyword = search?.value?.trim()
    let colors
    if (!type) {
        colors = Object.keys(origin_colors).map(k => origin_colors[k]).flat()
    }
    else if (type in origin_colors) {
        colors = origin_colors[type]
    }
    if (keyword) {
        colors = colors.filter(c => c.name.includes(keyword) || c.phonic.includes(keyword) || c.hex.includes(keyword))
    }
    colors && render(e, colors)
}

function render(e, color){
    $colors.innerHTML = ''
    color.forEach((item) => {
        const { name, phonic, hex, rgb, type } = item
        const contrastColor = getContrastColor(hex)
        const $color = document.createElement('div')
        $color.className = 'color'
        $color.title = `点击复制: ${hex}`
        $color.style = `background-color: ${hex};color: ${contrastColor};`

        const $name = document.createElement('div')
        $name.className = 'name'
        $name.textContent = name

        const $hex = document.createElement('div')
        $hex.className = 'hex'
        $hex.textContent = hex

        const $rgb = document.createElement('div')
        $rgb.className = 'rgb'
        $rgb.textContent = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

        $color.appendChild($name)
        $color.appendChild($hex)
        $color.appendChild($rgb)

        $colors.appendChild($color)
    })

    document.querySelector('#count').textContent = color.length

    if (e) {
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
    }
}

let timeoutId = null
function searchColor(e) {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
        pushColor(undefined, curType)
        timeoutId = null
    }, 500)
}

// 复制颜色代码
document.addEventListener('click', e => {
    let hex
    if (e.target.classList.contains('color')) {
        hex = e.target.querySelector('.hex').textContent
    }
    if (e.target.classList.contains('name') || e.target.classList.contains('rgb')) {
        hex = e.target.parentNode.querySelector('.hex').textContent
    }
    if (e.target.classList.contains('hex')) {
        hex = e.target.textContent
    }
    if (hex) {
        navigator.clipboard.writeText(hex)
        bubble(e, '复制成功')
    }
})

pushColor()
