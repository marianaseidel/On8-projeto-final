const button = document.querySelector('.button')
const div = document.querySelector('#info-quadro')
let divTexto = document.createElement('div')
let text = document.createElement('h4')
let lista = document.createElement('ul')
let item1 = document.createElement('li')
let item2 = document.createElement('li')
let item3 = document.createElement('li')
let item4 = document.createElement('li')
let img = document.createElement('img')

div.appendChild(divTexto)
div.appendChild(img)
divTexto.appendChild(text)
divTexto.appendChild(lista)
lista.appendChild(item1)
lista.appendChild(item2)
lista.appendChild(item3)
lista.appendChild(item4)

button.addEventListener('click', event => {
    event.preventDefault
    
    text.textContent = 'Ao contribuir com nossa creche, você está ajudando no desenvolvimento e na melhoria das atividades destinadas às nossas crianças e à nossa estrutura!'
    item1.textContent = 'Banco do Brasil'
    item2.textContent = 'Agência: 1837-6'
    item3.textContent = 'Conta corrente: 40.905-7'
    item4.textContent = 'Clube de Mães e Creche Lar Esperança'

    img.src = '/Home/img/icone-porquinho.svg'
    img.alt = 'Ícone porquinho'

    divTexto.classList.add('colabore-div')
    text.classList.add('colabore-texto')
    lista.classList.add('colabore-lista')
    div.classList.add('colabore-box')
    img.classList.add('colabore-img')
})

