// Aula38: Encontre a igualdade (3:13:30)
// Igualdade de objetos
function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')
const endereco3 = endereco1;

function saoIguais(endereco1, endereco2) {
    // comparar se as propriedades sao iguais
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1, endereco2)); // true

function memoriasIguais(endereco1, endereco2) {
    // comparar se a referencia do objeto aponta para mesmo lugar na memória
    return endereco1 === endereco2
}
console.log(memoriasIguais(endereco1, endereco2)); // false