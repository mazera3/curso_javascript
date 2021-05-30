// Aula47: Esvaziando um array (3:56:08)
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num2 = num1;
/*
// solução 1: reatribuir array: num = []
console.log('num1', num1 = []) // Array []
console.log('num2', num2) // Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 
*/

// solução 2: num.length = 0; (o melhor)

num1.length = 0;
console.log('num1', num1 = []) // Array []
console.log('num2', num2)  // Array [] 

// solução 3: splice(0,num.length)
/* 
num1.splice(0,num1.length)
console.log('num1', num1) // Array []
console.log('num2', num2) // Array []
 */

// solução 4: num.pop()
/* let n = num1.length
while (n > 0) {
    num1.pop()
    console.log('num1', num1)
    n = num1.length
} */
/* 
num1 Array(8)[1, 2, 3, 4, 5, 6, 7, 8]
num1 Array(7)[1, 2, 3, 4, 5, 6, 7]
num1 Array(6)[1, 2, 3, 4, 5, 6]
num1 Array(5)[1, 2, 3, 4, 5]
num1 Array(4)[1, 2, 3, 4]
num1 Array(3)[1, 2, 3]
num1 Array[1, 2]
num1 Array[1]
num1 Array[] 
*/