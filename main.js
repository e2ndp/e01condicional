let nombre = prompt('Ingrese su nombre, por favor: ');

let hora = Number(prompt('Ingrese la hora actual, por favor (ej. 00 - 23):'));

let temperatura = Number(prompt('Ingrese temperatura actual, por favor: '));

console.log('Hola '+nombre+' espero que tengas ')
if (hora < 12) {
    console.log('buenos dias');
}
else if(hora < 18){
    console.log('buenos tardes');
}
else {
    console.log('buenos noches');
}

if (temperatura < 18) {
    alert('Hace frio, abrigate...');
}
else if(temperatura < 28){
    alert('Esta agradable, disfruta el dia...');
}
else {
    alert('Hace calor, no te deshidrates...');
}