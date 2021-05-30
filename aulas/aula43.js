// Aula43: Encontrando um elemento (primitivo)
const numeros = ['a','b','c','d','a','e'] // Array(5) [ "a", "b", "c", "d", "a", "e" ]

let pos1 = numeros.indexOf('d') // pos 3 (indice 3)
let pos2 = numeros.indexOf('f') // pos -1
let pos3 = numeros.lastIndexOf('a') // pos 4 (indice 4)
let find1 = (numeros.indexOf('c') !== -1); // true
let find2 = (numeros.includes('b')); // true

console.log(pos1,pos2,pos3,find1,find2);