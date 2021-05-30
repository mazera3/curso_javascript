// Aula33 - Math
// https://www.w3schools.com/js/js_math.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
// A função Math.log10() retorna o logaritmo de base 10 de um número
// Qual o pH de uma solução de concentação [H+] = 0,1 mol/L?
// pH = -log([H+]) => 

let pH = -Math.log10(0.00005).toFixed(2);
console.log('pH =', pH)