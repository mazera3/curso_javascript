// Aula42 - Introdução a Arrays (3:36:18)
// Adicioner elemento a um array
const numeros = [1,2,5];
console.log('numeros', numeros)
// adicionar no inicio
numeros.unshift(0)
console.log('numeros', numeros)
/* 
0: 0
​1: 1
​2: 2
​3: 3
​length: 4
*/
// adicionar no meio
numeros.splice(2,0,'a') // splice(indice,quatos-exclui,valor) 
console.log('numeros', numeros)
/* 
Array(5) [ 0, 1, "a", 2, 5 ]
0: 0
1: 1
2: "a"
3: 2
4: 5
length: 5 
*/
// adicionar ao final
numeros.push('w');
console.log('numeros', numeros)
/* 
Array(6) [ 0, 1, "a", 2, 5, "w" ]
0: 0
1: 1
2: "a"
3: 2
4: 5
5: "w"
length: 6 
*/
