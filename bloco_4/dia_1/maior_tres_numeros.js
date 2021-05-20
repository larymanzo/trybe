// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let num1 = 6;
let num2 = 7;
let num3 = 50;

if((num1 > num2) && (num1 > num3)) {
    console.log('O maior numero é: ' + num1);
} else if ((num2 > num1) && (num2 > num3)) {
    console.log('O maior numero é: ' + num2);
} else {
    console.log('O maior numero é: ' + num3);
}