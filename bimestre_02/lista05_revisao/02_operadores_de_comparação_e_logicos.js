// Implemente uma função que recebe três números e retorna true se pelo menos dois deles forem iguais.

function doisIguais(a, b, c) {
    return (a === b || a === c || b === c);
}

console.log(doisIguais(1, 2, 3)); // false
console.log(doisIguais(1, 2, 2)); // true


// Crie uma função que verifica se um número é primo. 
// Retorne true se for primo, senão retorne false.

function ehPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(ehPrimo(7)); // true
console.log(ehPrimo(10)); // false


// Crie uma função que recebe uma string e verifica se ela é um palíndromo (lê-se da mesma forma de trás para frente).

function ehPalindromo(str) {
    let invertida = str.split('').reverse().join('');
    return str === invertida;
}

console.log(ehPalindromo('radar')); // true
console.log(ehPalindromo('javascript')); // false
