// Aula26 - Média de Notas
// Exercício de Média Escolar
// Obter a média a partir de um array
// toFixed(2) fixa duas casa decimais  76,333333 => 76,33
// 0-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const array = [70, 70, 80]

console.log(mediaAluno(array))

function mediaAluno(notas) {
    const media = calcularMedia(notas).toFixed(2);
    if (media < 60) return media +' (E)' ;
    if (media < 70) return media +' (D)'
    if (media < 80) return media +' (C)'
    if (media < 90) return media +' (B)'
    return media +' (A)';
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}