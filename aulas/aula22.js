// Aula22 - Medidor de velocidade => 1:46:38

// Definimos a velocidade Máxima de 70 km/h
// cada 5 km acima do limite penaliza 1 ponto na carteira.
// usar a função Math.floor() para arredondar para baixo um inteiro.
// caso pontos maior que 12 - carteira suspendida

verifVel(130);

function verifVel(vel) {
    const velMax = 70;
    const kmp = 5;
    if (vel <= velMax) {
        console.log('OK')
    } else {
        let p = Math.floor((vel - velMax) / kmp)
        if (p >= 12)
            console.log('Carteira Suspensa!');
        else
            console.log(p, ' Pontos na Carteira');
    }
}