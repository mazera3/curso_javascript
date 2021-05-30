// Aula37 - Montador de endereço (3:10:07) // Objeto Endereço
// Criar um objeto endereço que contenha as seguintes informações:
// Rua, Cidade, CEP, exibirEndereco()

let endereco = {
    rua: 'Felip Shimidt',
    cidade: 'Nova Trento',
    cep: '88240'
}

let enderecoEdio = Object.assign({numero:4079},endereco)

function exibirEndereco(enderecoEdio){
    for(let key in enderecoEdio){
        console.log(key, enderecoEdio[key]);
    }
}

exibirEndereco(enderecoEdio);