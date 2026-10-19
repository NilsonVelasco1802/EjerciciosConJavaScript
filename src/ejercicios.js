//Ejercicio 1: Notas del módulo


const Notas = [4.0, 5.0, 3.7,2.3,2.9] 
let suma=0
let promedio=0
for (let i=0 ; i < Notas.length ; i++){
    suma += Notas[i];

    promedio = suma/Notas.length
   
}

console.log("promedio: "+promedio)

if (promedio<3) {
    console.log("Debe reforzar");
} else {
    console.log("Modulo aprobado");
}






