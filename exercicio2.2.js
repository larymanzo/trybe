// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = frase => {
    let wordArray = frase.split(' ')
    let maxLength = 0
    let result = ''

for (const word of wordArray) {
    // se o tamanho da word foi igual ao contador maxLength
    if (word.length > maxLength) {
        //o contador vai receber o tamanho da palavra
        maxLength = word.length;
        // o result que vai ser a string, vai receber a palavra
        result = word;
    }
}

return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))