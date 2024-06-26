// Crie uma função que receba um array de objetos representando estudantes, 
// cada objeto deve ter as propriedades nome e nota. 
// A função deve retornar o nome do estudante com a maior nota.

const estudantes = [
    { nome: 'Alice', nota: 85 },
    { nome: 'Bob', nota: 92 },
    { nome: 'Charlie', nota: 88 }
];

function maiorNota(estudantes) {
    let melhorEstudante = estudantes[0];
    for (let i = 1; i < estudantes.length; i++) {
        if (estudantes[i].nota > melhorEstudante.nota) {
            melhorEstudante = estudantes[i];
        }
    }
    return melhorEstudante.nome;
}

console.log(maiorNota(estudantes)); // Bob


// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

const numeros = [1, 2, 3, 4, 5];
console.log(somaArray(numeros)); // 15


// Crie uma função que receba um array de números e retorne um novo array com os números ordenados em ordem crescente.

// Tulizando Algoritmo de Ordenação Bubble Sort
function ordenarArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const numeros2 = [3, 1, 4, 1, 5, 9];
console.log(ordenarArray(numeros2)); // [1, 1, 3, 4, 5, 9]

