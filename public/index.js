const aside = document.querySelector('aside')
const burger = document.querySelector('.active')
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    aside.classList.remove('translateY')
  } else {
    aside.classList.add('translateY')
  }
})

close.addEventListener('click', (e) => {
  console.log(e.target)
  if (close.classList.contains('active')) {
    aside.classList.remove('translateY')
  } else {
    aside.classList.add('translateY')
  }
})

//Aos library
AOS.init({
  duration: 800,
})
