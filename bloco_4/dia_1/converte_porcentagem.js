// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 10.5;

//convertendo em porcentagem:

notaPorcento = nota * 10;

//mostrando a nota na tela

    if (notaPorcento>=90 && notaPorcento<=100){
        console.log('A');
    } else if (notaPorcento>=80 && notaPorcento<90){
        console.log('B');
    } else if (notaPorcento>=70 && notaPorcento<80){
        console.log('C');
    } else if (notaPorcento>=60 && notaPorcento<70){
        console.log('D');
    } else if (notaPorcento>=50 && notaPorcento<60){
        console.log('E');
    } else if (notaPorcento<50){
        console.log('F');
    } else {
        console.log('Erro! Digite uma nota válida');
    }