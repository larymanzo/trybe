// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Dama"
let res = peca.toLowerCase();

switch (res){
    case "torre":
        console.log('Reto');
        break;
    
    case "cavalo":
        console.log('Em L');
        break;

    case "bispo":
        console.log('Diagonal');
        break;

    case "dama":
        console.log('Todos os lados');
        break;

    case "rei":
        console.log('1 casa, todos os lados');
        break;

    case "peão":
        console.log('1 casa, para frente');
        break;
    
    default:
        console.log('Peça inválida!');
    }