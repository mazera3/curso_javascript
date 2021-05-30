// Aula49: Operador Spread (4:07:05) 
// ES6 novas formas
const primeiro = ['a','b','c']
const segundo = [4,5,6]

const junto = [...primeiro,'%',...segundo]
console.log('junto', junto) // junto Array(6) [ "a", "b", "c", "%", 4, 5, 6 ]

const clone = [...junto]
console.log('clone', clone) // clone Array(7) [ "a", "b", "c", "%", 4, 5, 6 ]
