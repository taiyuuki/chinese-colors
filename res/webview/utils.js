function getContrastColor(hexcolor) {
  const r = Number.parseInt(hexcolor.substring(1, 2), 16)
  const g = Number.parseInt(hexcolor.substring(3, 4), 16)
  const b = Number.parseInt(hexcolor.substring(5, 6), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 8 ? 'black' : 'white'
}