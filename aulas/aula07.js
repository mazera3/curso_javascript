// Aula07 - Tipos de funções
// 1. Realiza uma tarefa e não devolve nada
// 2. Faz uma operação e retorna algo

function nome() {
    console.log('marcos')
}
nome() // marcos

function dobro(valor) {
    return valor * 2;
}

// console.log(dobro(7)) // 14
let produto = dobro(9);
console.log(produto) // 18