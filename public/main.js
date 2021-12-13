const checkbox = document.querySelector('.checkbox')
const label = document.querySelector('.label')

const body = document.querySelector('body')
const topPattern = document.querySelector('.container')
const header = document.querySelector('.container header')
const cards = document.querySelectorAll('.box')
const secondTitle = document.querySelector('.second-title h3')
const items = document.querySelectorAll('.item')


checkbox.addEventListener('change',()=>{
  body.classList.toggle('light')
  topPattern.classList.toggle('light')
  header.classList.toggle('light')
  cards.forEach((card)=>{
      card.classList.toggle('light')
  })
  secondTitle.classList.toggle('light')
  items.forEach((item)=>{
    item.classList.toggle('light')
})
})