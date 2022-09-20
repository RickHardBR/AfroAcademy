function changeColor() {
  let body = document.querySelector('body')
  let button = document.querySelector('#changeColor')

  if (body.getAttribute('style') !== 'background-color: var(--background-color)') {
    body.setAttribute('style', 'background-color: var(--background-color)')
    button.innerHTML = 'Voltar'
  } else {
    body.setAttribute('style', 'background-color: var(--white)')
    button.innerHTML = 'Mudar background-color'
  }
}

let alternateSquares = false

function viewSquares() {
  let squares = document.querySelectorAll('.square')
  let button = document.querySelector('#squares')

  alternateSquares = !alternateSquares

  if (alternateSquares === true) {
    squares.forEach(div => {
      div.setAttribute(
        'style',
        'width: 100px; height: 100px; border: 3px solid var(--red)'
      )
    })
    button.innerHTML = 'Ocultar Quadrados'
  } else {
    squares.forEach(div => {
      div.setAttribute('style', null)
    })
    button.innerHTML = 'Mostrar Quadrados'
  }
}

let alternateCircles = false

function viewCircles() {
  let circles = document.querySelectorAll('.circle')
  let button = document.querySelector('#circles')

  alternateCircles = !alternateCircles

  if (alternateCircles === true) {
    circles.forEach(div => {
      div.setAttribute(
        'style',
        'width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--blue)'
      )
    })
    button.innerHTML = 'Ocultar Círculos'
  } else {
    circles.forEach(div => {
      div.setAttribute('style', null)
    })
    button.innerHTML = 'Mostrar Círculos'
  }
}

let alternateLemons = false

function viewLemons() {
  let lemons = document.querySelectorAll('.lemon')
  let button = document.querySelector('#lemons')

  alternateLemons = !alternateLemons

  if (alternateLemons === true) {
    lemons.forEach(div => {
      div.setAttribute(
        'style',
        'width: 100px; height: 100px; border-radius: 50% 0; background-color: var(--yellow); border: 2px solid var(--lemon)'
      )
    })
    button.innerHTML = 'Ocultar Limões'
  } else {
    lemons.forEach(div => {
      div.setAttribute('style', null)
    })
    button.innerHTML = 'Mostrar Limões'
  }
}
