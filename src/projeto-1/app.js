console.log(document.querySelector('h1').textContent)
document.querySelector('h1').textContent = 'ESALQ'
document.title = 'MBA ESALQ'

let tagH3 = document.createElement('h3')
tagH3.textContent = 'Engenharia de Software'
document.body.appendChild(tagH3)