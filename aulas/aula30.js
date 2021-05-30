// Aula30 - Funções de Construtor (2:34:51) - Constructor Functions
// camelCase : umDoisTres...
// Pascal Case: UmDoisTres...

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação ...')
    }
}
// instanciar a função

const celular = new Celular('Asus',5.5,9000);
console.log(celular);