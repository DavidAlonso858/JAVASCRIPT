var pi = Math.PI;
var aleatorio = Math.random();
console.log(pi);

console.log(Math.min(1, 5, 3, 9));
console.log(Math.max(1, 5, 3, 9));

console.log(Math.round(4.5));
console.log(aleatorio);

function generarNumero(numeroMax){
    return Math.round(Math.random()* numeroMax)

}

console.log(generarNumero(200));