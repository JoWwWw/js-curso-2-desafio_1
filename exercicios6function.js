let num = parseInt(prompt('Escreva um número'));
let num2 = parseInt(prompt('Escreva outro número'));
let num3 = parseInt(prompt('Escreva mais um número'));
let media = numeroMedia(num, num2, num3); 
alert(`A média dos números é ${media}`);

function numeroMedia(num, num2, num3){
     return (num+num2+num3)/3;
    
}
    
