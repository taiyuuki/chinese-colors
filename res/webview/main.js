const $colors = document.getElementById('colors')
const colors = {blue, brown, red, yellow, green, bwg, purple}
$colors.style = 'display: flex;flex-wrap: wrap;items-align: center;text-align: center;'
$colors.id = 'colors'

function pushColor(e, type) {
    const color = colors[type]
    $colors.innerHTML = ''
    color.forEach((item) => {
        const { name, phonic, hex, rgb, type } = item
        const contrastColor = getContrastColor(hex)
        const $color = document.createElement('div')
        $color.className = 'color'
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

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if (e) {
        e.currentTarget.className += " active";
    }
    else {
        tablinks[0].className += " active";
    }
}

pushColor(undefined, 'red')
