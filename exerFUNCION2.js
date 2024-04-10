let dolar = parseFloat(prompt('Fale um valor')); 
let resultado = 1;
function fatorial(xNum){
    if (xNum == 0){
            return 1;
    }

    while(xNum!=0) {
    resultado *= xNum;
    xNum -= 1; 
}
return resultado;
}
fatorial(num);
alert(`O valor do fatorial é ${resultado}`);

