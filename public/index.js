const aside = document.querySelector('aside')
const burger = document.querySelector('.active')
const close = document.querySelector('.close')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    aside.classList.remove('translateY')
    body.style = 'overflow:hidden;'
  } else {
    aside.classList.add('translateY')
    body.style = 'overflow:none;'
  }
})

close.addEventListener('click', (e) => {
  console.log(e.target)
  if (close.classList.contains('active')) {
    aside.classList.remove('translateY')
    body.style = 'overflow:hidden;'
  } else {
    aside.classList.add('translateY')
    body.style = 'overflow:none;'
  }
})

//Aos library
AOS.init({
  duration: 800,
})
