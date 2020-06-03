const aside = document.querySelector('aside')
const burger = document.querySelector('.active')
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    aside.classList.remove('translateY')
    aside.style = ` opacity:1;`
  } else {
    aside.classList.add('translateY')
    aside.style = ` opacity:0;`
  }
})

close.addEventListener('click', (e) => {
  console.log(e.target)
  if (close.classList.contains('active')) {
    aside.classList.remove('translateY')
    aside.style = ` opacity:1;`
  } else {
    aside.classList.add('translateY')
    aside.style = ` opacity:0;`
  }
})
