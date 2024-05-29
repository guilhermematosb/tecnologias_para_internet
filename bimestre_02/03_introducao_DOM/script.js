let filho = document.getElementById('filho');
filho.innerText = "Adicionando um texto na div"

let pai = filho.parentNode
pai.style.backgroundColor = "lightblue"

filho.innerHTML = "<strong>Um novo texto em negrito</strong>"
filho.textContent = "lorem ipsum dolor sit amet, consectetur"

let novoParagrafo = document.createElement("p")
novoParagrafo.innerText = "Este é um novo paragrafo"

pai.appendChild(novoParagrafo)

let elemento = document.getElementById("retirarElementos")

let botao = document.getElementById("click")

botao.addEventListener("mouseover", function(){
    // alert("Clicaram no botao")
    let filho = document.getElementById('filho');
    filho.innerText = "Este é um novo paragrafo atraves do evento"
    pai.style.backgroundColor = "blue"

})




