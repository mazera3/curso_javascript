function verificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    Convidados = ['Nadir', 'Alice', 'Helena', 'Joana', 'Edio'];
    if (Convidados.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerHTML = '<span class="alert alert-primary">Você pode entrar</span>';
    } else {
        document.getElementById('PermissaoDeEntrada').innerHTML = '<span class="alert alert-danger">Você NÃO pode entrar</span>';
    }
}