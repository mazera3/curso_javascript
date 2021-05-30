// Aula48: Combinando ou Cortando um array (4:01:38)
const primeiro = ['a','b','c']
const segundo = [4,5,6]

// combinar: .concat
const junto = primeiro.concat(segundo)
console.log('junto', junto) // junto Array(6) [ "a", "b", "c", 4, 5, 6 ]

 // dividir o array: .slice(indice-inicial,indice-final-1)
 const cortado = junto.slice(2,4)
 console.log('cortado', cortado) // cortado Array [ "c", 4 ]

 // .slice(indice-inicial) até o final
 const cortado2 = junto.slice(2)
 console.log('cortado2', cortado2) // cortado2 Array(4) [ "c", 4, 5, 6 ]