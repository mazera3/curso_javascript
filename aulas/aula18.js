// Aula18 - Laço For ...In
let pessoa = {
    nome: 'Édio',
    idade: 54,
    situacao: true,
    sobrenome: 'Mazera'
}
// key => value
for (let key in pessoa) {
    console.log('Chave:', key, 'Valor: ', pessoa[key]);
}

//Chave: nome Valor:  Édio
//Chave: idade Valor:  54
//Chave: situacao Valor:  true
//Chave: sobrenome Valor:  Mazera

let cores = ['verde', 'amarelo', 'azul', 'branco']
for (let i in cores) {
    console.log('Cor', i, ' = ', cores[i])
}