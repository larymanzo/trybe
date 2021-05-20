// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let ang1 = 7;
let ang2 = 7;
let ang3 = 50;

soma = ang1 + ang2 + ang3;

if (ang1<= 0 || ang2<= 0 || ang3<= 0){
    console.log('Erro, ângulo inválido');
} else {
    if (soma >= 180) {
        console.log('True');
    } else {
        console.log('False');
    }
}
