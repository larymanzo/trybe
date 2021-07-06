// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const button = document.getElementById('button')
let clickCount = 0;
let textToDisplay = document.getElementById("text");

const count = () => textToDisplay.innerHTML =  clickCount += 1;

button.addEventListener('click', count); 