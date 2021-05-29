// Aula08 - Operadores: Aritméticos, Atribuição, Comparação,Lógicos, Bitwise
// Operadores aritméticos: +, -, /, *, **
let saldo = 100;
console.log(saldo + 30)
console.log(saldo - 30)
console.log(saldo * 30)
console.log(saldo / 30)
console.log(saldo ** 3)
// operadores de incremento (++) e decremento (--)
let idade = 18;
idade++
console.log('idade', idade) // 19
console.log('idade', --idade) // 18
// += , -= , *=
let i = 10;
i += i;
console.log(i) // 20
i -= i;
console.log(i) // 0
i = 10;
i *= i;
console.log(i) // 100
i = 10;
i /= i;
console.log(i) // 1
// Operadores de igualdade
// igualdade restrita (===) e igualdade solta (==)
i = 5;
j = '5';
console.log(i === i) // true
console.log(i === j) // false
console.log(i == j) // true
