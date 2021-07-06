// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (number) => {
    let fat = 1;
    for (let index = 1; index <= number; index += 1) {
        fat = fat * index;
    }
    return fat
}

console.log(fatorial(4));