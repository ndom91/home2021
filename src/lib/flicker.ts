const setFlickerAnimation = () => {
  // DISABLE EFFECT - remove flicker class on letter when switching back to light mode
  if (!document?.documentElement?.classList.contains('dark')) {
    document
      .querySelectorAll('.animate-flicker')?.[0]
      ?.classList.remove('animate-flicker')
    return false
  }

  // ENABLE EFFECT
  const animatedElements = Array.from(
    document.querySelectorAll('.js_darkmode_flicker')
  )
  if (!animatedElements.length) {
    return false
  }

  const wrapRandomChars = (str: string, iterations = 1) => {
    const chars = str.split('')
    const excludedChars = [' ', '-', ',', '.', ';', ':', '(', ')']
    const excludedIndexes: number[] = []
    let i = 0

    while (i < iterations) {
      const randIndex = Math.floor(Math.random() * chars.length)
      const c = chars[randIndex]

      if (!excludedIndexes.includes(randIndex) && !excludedChars.includes(c)) {
        chars[randIndex] = `<span class="animate-flicker">${c}</span>`
        excludedIndexes.push(randIndex)
        i++
      }
    }

    return chars.join('')
  }

  animatedElements.forEach((el) => {
    if (!el) return
    const text = el.textContent?.trim() || ''
    el.innerHTML = wrapRandomChars(text, 1)
  })
}

export default setFlickerAnimation
