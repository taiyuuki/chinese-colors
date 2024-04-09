function getContrastColor(hexcolor) {
  const r = Number.parseInt(hexcolor.substring(1, 2), 16)
  const g = Number.parseInt(hexcolor.substring(3, 4), 16)
  const b = Number.parseInt(hexcolor.substring(5, 6), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 8 ? 'black' : 'white'
}

function bubble(e, mes)  {
  const pageX = e.pageX,
    pageY = e.pageY
  const showEl = document.createElement('span')
  showEl.className = 'copy-textPuff'
  document.body.appendChild(showEl)
  showEl.innerHTML = mes
  showEl.addEventListener('animationend', function () {
    showEl.parentNode?.removeChild(showEl)
  })
  showEl.style.left = pageX - (showEl.clientWidth / 2) + 'px'
  showEl.style.top = pageY - showEl.clientHeight - 5 + 'px'
}