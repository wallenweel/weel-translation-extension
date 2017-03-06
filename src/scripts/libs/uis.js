import $ from './Weel.js'

/**
 * Inspect Node is js UI or Not
 * @param  {Element} node  A element that need to inspect
 * @param  {Array}   clses Some class name as flag
 * @return {Boolean}       Yes or no
 */
function sui(node, ...clses) {
  if (!node.classList.contains('-js')) return false

  for (var i = 0; i < clses.length; i++)
    if (!node.classList.contains(clses[i])) return false

  return true
}

export const wave = ev => {
  if (!sui(ev.target, 'wave')) return 0

  const wave = document.createElement('span')
  const target = ev.target

  target.appendChild(wave)

  const rect = wave.offsetParent.getBoundingClientRect()
  const [ left, top ] = [
    ev.clientX - rect.x,
    ev.clientY - rect.y,
  ]

  wave.classList.add('wave')
  wave.style.left = `${left}px`
  wave.style.top = `${top}px`

  setTimeout(() => target.removeChild(wave), 2000)
}

export const select = ev => {
  const target = ev.target

  if (!sui(target, 'select')) return 0

  ev.stopPropagation()

  if (target.classList.contains('_on')) {
    target.setAttribute('data-text', target.innerText)
    target.setAttribute('data-value', target.getAttribute('data-value'))
    return target.classList.remove('_on')
  }

  $('.select.-js._on', ev.currentTarget).off()

  target.classList.add('_on')
}
