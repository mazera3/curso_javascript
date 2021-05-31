// Aula51: combinar arrays (4:13:50)
const num = ['a','b','c','d',1,2,3,4]
const juntos = num.join('-')
console.log('juntos', juntos) // juntos a-b-c-d-1-2-3-4

const frase = 'mas já passou da morte para a vida'
const FraseSeparada = frase.split(' ')
console.log('FraseSeparada', FraseSeparada) 
// FraseSeparada Array(8) [ "mas", "já", "passou", "da", "morte", "para", "a", "vida" ]

const slug = FraseSeparada.join('-')
console.log('slug', slug) // slug mas-já-passou-da-morte-para-a-vida