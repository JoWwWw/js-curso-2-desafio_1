let raio = parseFloat(prompt("digite o raio do circulo"));
let area;
let perimetro;
function perimetroCirculo(xRaio){
    return (2*3.14*raio);
}
perimetro = perimetroCirculo(raio);
alert(`O perimetro do circulo é ${perimetro.toFixed(2)}`);7

function areaCirculo(xRaio) {
    return (3.14*xRaio**2);
}
area = areaCirculo(raio);
alert(`A area do circulo é ${area.toFixed(2)}`);