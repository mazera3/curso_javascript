// Aula34 - String - (2:48:44)
// tipo primitivo
const msg = 'Minha primeira mensagem'; // typeof msg =>  string
//           0123456
// tipo objeto
// O objeto global String  é um construtor para strings, ou uma sequência de caracteres.
const outramsg = new String('Bom dia'); // typeof outramsg => objeto
// https://www.w3schools.com/js/js_strings.asp
console.log(msg.length) // 23
console.log(msg[2]) // n
console.log(msg.includes('prime')) // true
console.log(msg.startsWith('M')) // true
console.log(msg.endsWith('M')) // false
console.log(msg.indexOf('pr')) // 6

console.log(msg.replace('primeira','segunda'))
const txt = '    texto aqui ...';
console.log('|',txt,'|',txt.trim())
console.log(msg.split(' '));