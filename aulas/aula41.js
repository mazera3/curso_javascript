// Aula41 - Faixa de preços (3:28:08)
// Opção 1
let faixas = [{
    tooltip: 'Até R$700',
    minimo: 0,
    maximo: 700
},
{
    tooltip: 'de R$700 a R$1.000',
    minimo: 700,
    maximo: 1000
},
{
    tooltip: 'R$1000 ou mais',
    minimo: 1000,
    maximo: 9999999
}
]
// Opção 2: Factory Function

function faixaPreco(tooltip, minimo, maximo) {
return {
    tooltip,
    minimo,
    maximo
}
}
let faixas2 = [
faixaPreco('a', 0, 700),
faixaPreco('b', 700, 1000),
faixaPreco('c', 1000, 10000)
]

// Opção 3: Constructor Function 
function FaixaPreco2(tooltip, minimo, maximo){
this.tooltip = tooltip,
this.minimo = minimo,
this.maximo = maximo
}
let faixas3 = [
new FaixaPreco2('x',10,20),
new FaixaPreco2('y',20,30),
new FaixaPreco2('z',30,40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
