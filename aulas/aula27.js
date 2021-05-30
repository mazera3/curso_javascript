// Aula27 - Contador de asteriscos
// criar uma função de exiba a quantidade de asteriscos (*) que a linha possui.

exibirAsteriscos(10)

function exibirAsteriscos(linhas) {
    /* let padrao = '';
    for(let i = 1; i <= linhas; i++){
        padrao += '*';
        console.log(padrao);
    } */
    let padrao = '';
    for (let i = 1; i <= linhas; i++) {
        let padrao = '';
        for (let j = 0; j <= i; j++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}