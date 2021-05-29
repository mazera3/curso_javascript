// Aula13 - 
// if ... else

// se a hora estiver entre 6:00 e 12:00: Bom dia!
// se a hora estiver entre 12:00 e 18:00: Boa tarde!
// caso contrario: Boa noite!

// if(condição){ código executado ...}
now = new Date;
let hora = now.getHours() //+ ":" + now.getMinutes();

if(hora > 6 &&  hora < 12){
    console.log('Bom dia!')
}
else if(hora > 12 &&  hora < 19){
    console.log('Boa tarde!')
}
else 
{
    console.log('Boa noite!')
}

console.log(hora)

var d = new Date();
var n = d.toLocaleTimeString();

console.log(n);