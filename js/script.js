// Ativar Links do Menu

const links = document.querySelectorAll('nav ul li a')
const lista = document.querySelectorAll('nav ul li')

function ativarLink(link){
    const url = location.href
    const href = link.href
    if (url.includes(href)) {
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)



// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search)


function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    elemento.checked = true
    console.log(elemento)
}

parametros.forEach(ativarProduto)


// ativar respostas

// perguntas frequentes

const perguntas = document.querySelectorAll('.faq-list dt button')
console.log(perguntas)

function ativarPergunta(event) {
    const clicado = event.currentTarget
    const controls = clicado.getAttribute('aria-controls')
    
    const resposta = document.getElementById(controls)
    resposta.classList.toggle('ativa')
}


function eventosPerguntas(pergunta){
    pergunta.addEventListener('click',ativarPergunta);
}


perguntas.forEach(eventosPerguntas)


// animação


if(window.SimpleAnime){
    new SimpleAnime();
}