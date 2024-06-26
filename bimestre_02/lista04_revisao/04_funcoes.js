// Crie uma função de alta ordem que recebe um array e uma função de callback. 
// A função de alta ordem deve aplicar a função de callback em cada elemento do array e retornar um novo array com os resultados.

function mapArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function dobrar(num) {
    return num * 2;
}

const numeros = [1, 2, 3, 4];
console.log(mapArray(numeros, dobrar)); // [2, 4, 6, 8]


// Crie uma função que recebe um número n e retorna uma função que, quando chamada, retorna o valor n incrementado.

function criarContador(n) {
    return function() {
        return ++n;
    };
}

const contador = criarContador(5);
console.log(contador()); // 6
console.log(contador()); // 7

// Crie uma função de alta ordem que recebe dois números e uma função de callback que realiza uma operação matemática 
// (adição, subtração, multiplicação ou divisão). A função de alta ordem deve retornar o resultado da operação.

function calcular(a, b, operacao) {
    return operacao(a, b);
}

function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

console.log(calcular(5, 3, adicionar)); // 8
console.log(calcular(5, 3, subtrair)); // 2
