let dolar = parseFloat(prompt('Fale um valor'));
let transformação;
function cotação (xDolar){
    return dolar*4.80;
}
transformação = cotação(dolar); 
alert(`O valor em reais é ${transformação}`);