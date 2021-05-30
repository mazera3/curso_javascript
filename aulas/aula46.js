// Aula46: Removendo elementos do array
const num = [1,2,3,4,5,6,7,8,9]

// remover do final
console.log(num.pop()) // 9
console.log('num', num) // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// remover no inicio
console.log('num', num.shift()) // 1
console.log('num', num) // Array(7) [ 2, 3, 4, 5, 6, 7, 8 ]
// remover do meio: splice(indice,numero de elementos)
console.log('num', num.splice(2,1)) // Array [ 4 ]
console.log('num', num) // Array(6) [ 2, 3, 5, 6, 7, 8 ]