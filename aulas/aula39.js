// Aula39 - Montador de postagem de blog (3:20:26)
// Objeto Postagem de Blog
/* titulo
mensagem
autor
vizualizacoes
comentario
(autor,mensagem)
estaAoVivo
 */
let postagem = {
    titulo: 'titulo',
    mensagem: 'mensagem',
    autor: 'autor',
    vizualizacoes: 10,
    comentario: [{
        autor: 'autor',
        mensagem: 'mensagem'
    }, {
        autor: 'autor2',
        mensagem: 'mensagem2'
    }],
    estaAoVivo: true
}
console.log(postagem);
