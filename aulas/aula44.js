// Aula44: Encontrando elemnto - tipo de referencia (3:45:18)
const pessoas = [{
    id: 1,
    nome: 'edio'
},
{
    id: 2,
    nome: 'nadir'
}
];
// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
// Caso contrario, undefined é retornado.
/* const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // 12
*/
const pessoa = pessoas.find(function (pessoa) {
return pessoa.id === 2
})
console.log('pessoa: ', pessoa)
/* 
pessoa:  
Object { id: 2, nome: "nadir" }
id: 2
nome: "nadir" 
*/
