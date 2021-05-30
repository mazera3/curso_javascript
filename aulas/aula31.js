
// Aula31 - Natureza dinâmica de objetos (2:41:08)
const mouse = {
    cor: 'red',
    marca:'dazz'
}
mouse.velocidade = 5000;            // adicionar propriedade
mouse.trocarDPI = function(){       // adicionar metodo
    console.log('mudando dpi...')
}
delete mouse.velocidade;            // exclui propriedade
 console.log(mouse);
