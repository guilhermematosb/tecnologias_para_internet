// o que é síncrono e assíncrono?

// Como a web funciona (Requisição e Resposta)?

// Como funciona uma API (Application Programming Interface)?

// O que é um callback?

// Fazendo uma requisição?

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", clicou)