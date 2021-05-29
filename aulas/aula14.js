// Aula14 - Switch ... case

// switch(variavel){ case codigo ...}
let permissao; // diretor (1), gerente (2), comum (3)
permissao = 1;

switch (permissao) {
    case 1:
        console.log('Diretor')
        break;
    case 2:
        console.log('Gerente')
        break;
    case 3:
        console.log('Usuário Comum')
        break;
    default:
        console.log('Nenhum usuario')
}