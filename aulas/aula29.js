// Aula29 - Factory Functions (funções de fábrica)
/* function criarCelular(){
    return{
        marcaCelular: 'ASUS',
        tamanhoTela: {
            vertical:155,
            horizontal:75
        },
        capacidadeBateria:5000,
        ligar:function(){
            console.log('Fazendo ligação ...')
        }
    }
} */

/* function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular: marcaCelular,
        tamanhoTela:tamanhoTela,
        capacidadeBateria:capacidadeBateria,
        ligar:function(){
            console.log('Fazendo ligação ...')
        }
    }
} */
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação ...')
        }
    }
}
const cel1 = criarCelular('Asus',5.5,5000);
console.log(cel1);
// Professor

function criarProf(nome,apelido,disciplina,carga){
    return{
        nome,
        apelido,
        disciplina,
        carga
    }
}
const edio = criarProf('Édio Mazera','edio','Química',30)
console.log(edio);