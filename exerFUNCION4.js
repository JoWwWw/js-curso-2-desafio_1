 
let altura = parseFloat(prompt('informe a altura'));
let largura = parseFloat(prompt('informe a largura'));
let area;
let perimetro;
function ValorPerimetro(xPerimetro){
    return (altura*2)+(largura*2);
}
perimetro = ValorPerimetro(altura,largura);
alert(`O Perimetro é ${perimetro.tofixed(2)}`);

function ValorArea(xArea){
    return altura*largura;
}
area = ValorArea(altura, largura);
alert(`A area é ${area.toFixed(2)}`);