// Aula50: Iterando um array: for, foreach (4:10:36)
const num = ['a','b','c','d',1,2,3,4]
/* 
for(v of num){
    console.log('valor: ', v)
}
 */
num.forEach((v,i) => console.log('valor: ', v,'indice: ',i))
/* 
valor:  a indice:  0
valor:  b indice:  1
valor:  c indice:  2
valor:  d indice:  3
valor:  1 indice:  4
valor:  2 indice:  5
valor:  3 indice:  6
valor:  4 indice:  7
*/