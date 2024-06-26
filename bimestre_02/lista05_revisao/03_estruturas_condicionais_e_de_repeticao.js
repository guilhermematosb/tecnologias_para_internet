// Escreva uma função que recebe uma string e retorna a string invertida usando um loop `for`.

function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

console.log(inverterString('javascript')); // 'tpircsavaj'


// Crie uma função que recebe um número e retorna o fatorial desse número usando um loop `while`.

function fatorial(n) {
    let resultado = 1;
    let i = n;
    while (i > 1) {
        resultado *= i;
        i--;
    }
    return resultado;
}

console.log(fatorial(5)); // 120

// Crie uma função que recebe um número e retorna a soma de todos os números de 1 até esse número usando um loop `do while`.

function somaAte(n) {
    let soma = 0;
    let i = 1;
    do {
        soma += i;
        i++;
    } while (i <= n);
    return soma;
}

console.log(somaAte(5)); // 15

