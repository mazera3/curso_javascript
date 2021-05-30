// Aula32 - Clonando objetos (2:43:30)

const celular = {
    marcaCelular: 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function () {
        console.log('Fazendo ligação...')
    }
}

const novoObjeto = Object.assign({
    capacidadeBateria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {
    ...celular
};
console.log(objeto2);
// tarefa: clonar
const professor = {
    nome: 'Édio mazera',
    email: 'mazera3@gmail.com',
    disciplina: 'Química',
    carga:30
}
console.log(professor);
const novoProf = Object.assign({periodo:'matutino'},professor)
console.log(novoProf);