let altura = parseFloat(prompt('Digite sua alturas em metros'));
let peso = parseFloat(prompt('Digite seu peso em kilos'));
let imc;

function calculoIMC(parAltura, parPeso){
    return parPeso/(parAltura*parAltura);
}
imc = calculoIMC(peso, altura);
alert(`O valor do IMC é ${imc.toFixed(2)}`);