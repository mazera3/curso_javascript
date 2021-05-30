// Aula24 - 
// Criar um método para ler propriedades de um objeto e exibir
// somente as propriedades do tipo string que estão nesse objeto.
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin Welson',
    personagem: 'Thor'
}
exibirProp(filme)

function exibirProp(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'string')
            console.log(prop, ':', obj[prop]);
    }
}