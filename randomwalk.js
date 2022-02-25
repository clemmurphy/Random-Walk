let x
let y
let stepSize = 12
let strokeSize = 6
let dotsPerSecond = 60

window.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('reset-button')
  clearButton.addEventListener('click', () => {
    setup()
  })
  const saveButton = document.getElementById('save-button')
  saveButton.addEventListener('click', () => {
    saveCanvas(canvas, 'generative-walk', '.jpg')
    setup()
  })
  const applyButton = document.getElementById('apply-button')
  const strokeSizeInput = document.getElementById('stroke-size')
  const stepSizeInput = document.getElementById('step-size')
  const dotsPerSecondInput = document.getElementById('dots-per-second')
  strokeSizeInput.value = strokeSize
  stepSizeInput.value = stepSize
  dotsPerSecondInput.value = dotsPerSecond
  applyButton.addEventListener('click', () => {
    stepSize = Number(stepSizeInput.value)
    strokeSize = Number(strokeSizeInput.value)
    dotsPerSecond = Number(dotsPerSecondInput.value)
    setup()
  })
})

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  background(51)
  x = windowWidth / 2
  y = windowHeight / 2
  frameRate(dotsPerSecond)
}

function draw() {
  stroke(random(120, 255))
  strokeWeight(strokeSize)

  const r = floor(random(4))

  if (x <= 0) x = windowWidth
  if (x > windowWidth) x = stepSize
  if (y <= 0) y = windowHeight
  if (y > windowHeight) y = stepSize

  point(x, y)

  switch (r) {
    case 0:
      x = x + stepSize
      break
    case 1:
      x = x - stepSize
      break
    case 2:
      y = y + stepSize
      break
    case 3:
      y = y - stepSize
      break
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(51)
}
