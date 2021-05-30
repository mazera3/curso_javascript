// Aula25: Criar a função somar que retorna a soma de todos os
// multiplos de 3 ou 5
let i = 0
let s = 0
soma(10)

function soma(n){
    for(i; i <= n; i++){
        if(i%3 === 0 || i%5 === 0){
            s += i
        }
    }
    console.log(s)
}