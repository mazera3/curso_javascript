// Aula21 - Fizzbuzz
// divisivel po 3: Fizz
// divisivel por 5: Buzz
// divisivel tanto por 3 como por 5: FizzBuzz
// não divisivel por 3 nem por 5: entrada
// entrada não numerica; não é numero
const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'não é número';
    if (entrada % 5 == 0 && entrada % 3 == 0)
        return 'FizzBuzz'
    if (entrada % 3 == 0)
        return 'Fizz'
    if (entrada % 5 == 0)
        return 'Buzz'
    return entrada;
}