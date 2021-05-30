// Aula28 - Números primos (2:20:30)
// criar um função que mostra os numeros primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let n = 2; n <= limite; n++) {
        if (numeroPrimo(n)) console.log('Primo => ',n);
    }
}

function numeroPrimo(n) {
    for (let div = 2; div < n; div++) {
        if (n % div === 0) {
            return false;
        }
    }
    return true;
}