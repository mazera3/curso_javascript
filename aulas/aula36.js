// Aula36 - Date
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
const data1 = new Date(); // Date Sun May 30 2021 12:34:04 GMT-0300 (Horário Padrão de Brasília)
const data2 = new Date('Feb 28 2021 07:45'); // Date Sun Feb 28 2021 07:45:00 GMT-0300 (Horário Padrão de Brasília)
const data3 = new Date(2021,4,30,12,35); // Date Sun May 30 2021 12:35:00 GMT-0300 (Horário Padrão de Brasília)

let hora = data1.getHours()+':'+data1.getMinutes(); // "12:42"
console.log(hora); // 12:42

let data4 = data1.toDateString(); // Sun May 30 2021

let data5 = data1.toISOString(); // 2021-05-30T15:46:10.755Z
