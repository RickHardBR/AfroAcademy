function changeColor(bodyColor) {
  let body = document.querySelector('body')
  body.style.background = bodyColor

  let h1 = document.querySelector('.Title')

  if(bodyColor === 'var(--black)' || bodyColor === 'var(--red)' || bodyColor === 'var(--blue)'){
    h1.style.color = 'var(--white)'
  } else {
    h1.style.color = 'var(--black)'
  }
  }