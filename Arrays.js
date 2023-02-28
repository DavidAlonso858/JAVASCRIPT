var numbers = [2, 3, 5, 7];

console.log(numbers[2]);

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
 
const ArrayPersona = [
    {
        nombre: "David",
        edad: 21,
        ComidaFavorita: "Filetes Empanados",
    },
    {
        nombre: "Pepe",
        edad: 25,
        ComidaFavorita: "Macarrones",

    },
    {
        nombre: "Juan",
        edad: 34,
        ComidaFavorita: "Patatas",
    }
]

for (var i = 0; i < ArrayPersona.length; i++) {
    console.log("\n")
    console.log("La edad es de: " + ArrayPersona[i].edad)
    console.log("Su comida favorita son: " + ArrayPersona[i].ComidaFavorita)
    console.log("El nombre es: " + ArrayPersona[i].nombre)
}

const objetoArray = {
    nombre: "Objeto con Array",
    array:["abeja","banana","camion","dado"],
}

objetoArray.array.forEach((elemento)=>{
    console.log("\n")
    console.log(elemento + " jajajahola")
})