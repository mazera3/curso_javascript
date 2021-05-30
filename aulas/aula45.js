// Aula45: Arrow functions (3:50:13)
const pessoas = [{
    id: 1,
    nome: 'edio'
},
{
    id: 2,
    nome: 'nadir'
}
];
/* const pessoa = pessoas.find(function (pessoa) {
return pessoa.id === 2
}) */
// a partr de ES6
const pessoa = pessoas.find((pessoa) => pessoa.id === 2)
// sem parametro: pessoas.find(() => pessoa.id === 2)

//console.log('pessoa: ', pessoa)