// Aguarda até que o conteúdo do DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Referências aos elementos do DOM
  const formularioContato = document.getElementById("formulario-contato")
  const listaContatos = document.getElementById("lista-contatos")
  const mensagemErro = document.getElementById("mensagem-erro")
  const campoBusca = document.getElementById("campo-busca")

  // Array para armazenar os contatos
  let contatos = JSON.parse(localStorage.getItem("contatos")) || []

  // Renderiza os contatos ao carregar a página
  renderizarContatos()

  // Evento de submissão do formulário
  formularioContato.addEventListener("submit", (e) => {
    e.preventDefault() // Previne o comportamento padrão de envio do formulário

    // Obtém os valores dos campos de entrada
    const nome = document.getElementById("nome").value.trim()
    const telefone = document.getElementById("telefone").value.trim()

    // Validações simples
    if (nome === "" || telefone === "") {
      mostrarErro("Ambos os campos são obrigatórios.")
      return
    }
    if (!/^\d{10}$/.test(telefone)) {
      mostrarErro("O número de telefone deve ter 10 dígitos.")
      return
    }

    // Adiciona o contato à lista
    adicionarContato(nome, telefone)

    // Limpa o formulário e a mensagem de erro
    formularioContato.reset()
    limparErro()
  })

  // Evento de entrada no campo de busca
  campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.toLowerCase()
    renderizarContatos(termo)
  })

  // Função para adicionar um contato
  function adicionarContato(nome, telefone) {
    const contato = { nome, telefone } // Cria um objeto de contato
    contatos.push(contato) // Adiciona o contato ao array
    localStorage.setItem("contatos", JSON.stringify(contatos)) // Salva o array atualizado no LocalStorage
    renderizarContatos() // Renderiza a lista de contatos
  }

  // Função para renderizar a lista de contatos
  function renderizarContatos(filtro = "") {
    listaContatos.innerHTML = "" // Limpa a lista de contatos
    contatos
      .filter(
        (contato) =>
          contato.nome.toLowerCase().includes(filtro) ||
          contato.telefone.includes(filtro)
      )
      .forEach((contato, indice) => {
        const li = document.createElement("li") // Cria um elemento de lista
        li.innerHTML = `
                <span>${contato.nome} - ${contato.telefone}</span>
                <button class="editar" onclick="editarContato(${indice})">Editar</button>
                <button class="excluir" onclick="excluirContato(${indice})">Excluir</button>
            `
        listaContatos.appendChild(li) // Adiciona o elemento à lista
      })
  }

  // Função para editar um contato
  window.editarContato = function (indice) {
    const contato = contatos[indice] // Obtém o contato pelo índice
    document.getElementById("nome").value = contato.nome // Preenche o formulário com os dados do contato
    document.getElementById("telefone").value = contato.telefone
    contatos.splice(indice, 1) // Remove o contato do array
    localStorage.setItem("contatos", JSON.stringify(contatos)) // Atualiza o LocalStorage
    renderizarContatos() // Renderiza a lista de contatos
  }

  // Função para excluir um contato
  window.excluirContato = function (indice) {
    contatos.splice(indice, 1) // Remove o contato do array
    localStorage.setItem("contatos", JSON.stringify(contatos)) // Atualiza o LocalStorage
    renderizarContatos() // Renderiza a lista de contatos
  }

  // Função para mostrar mensagens de erro
  function mostrarErro(mensagem) {
    mensagemErro.textContent = mensagem // Define o texto da mensagem de erro
  }

  // Função para limpar mensagens de erro
  function limparErro() {
    mensagemErro.textContent = "" // Limpa o texto da mensagem de erro
  }
})
