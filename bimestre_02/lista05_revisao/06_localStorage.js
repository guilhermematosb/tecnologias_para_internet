// Implemente um pequeno aplicativo que permita ao usuário salvar, visualizar e remover notas. 
// Use LocalStorage para persistir os dados entre sessões.

const inputNota = document.getElementById('inputNota');
const botaoSalvar = document.getElementById('botaoSalvar');
const botaoRemover = document.getElementById('botaoRemover');
const listaNotas = document.getElementById('listaNotas');

botaoSalvar.addEventListener('click', () => {
    const nota = inputNota.value;
    let notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
    displayNotas();
});

botaoRemover.addEventListener('click', () => {
    localStorage.removeItem('notas');
    displayNotas();
});

function displayNotas() {
    let notas = JSON.parse(localStorage.getItem('notas')) || [];
    listaNotas.innerHTML = '';
    notas.forEach(nota => {
        const li = document.createElement('li');
        li.textContent = nota;
        listaNotas.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayNotas);


