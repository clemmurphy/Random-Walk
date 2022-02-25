let x
let y
const stepSize = 6

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
})

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  background(51)
  x = windowWidth / 2
  y = windowHeight / 2
  frameRate(60)
}

function draw() {
  stroke(random(120, 255))
  strokeWeight(3)

  const r = floor(random(4))

  if (x > 0 && x <= width && y > 0 && y <= height) {
    point(x, y)
  } else {
  }

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
