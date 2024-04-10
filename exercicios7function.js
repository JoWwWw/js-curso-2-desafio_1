let numero1 = parseInt(prompt('Escreva um número'));
let     numero2 = parseInt(prompt('Escreva outro número'));
let maior;

function maiorNumero(numero1,numero2){
    maior = Math.max(numero1, numero2);
    alert(`o maior número é ${maior}`);
}
maiorNumero(numero1,numero2);