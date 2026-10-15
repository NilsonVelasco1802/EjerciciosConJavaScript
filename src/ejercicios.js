//Ejercicio 1: Notas del módulo
/*

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
*/
//Ejercicio 2: Control de inventario


const inventory = [
    {id: 1, name: "apple", stock: 0},
    {id: 2, name: "rice", stock: 10},
    {id: 3, name: "watermelon", stock: 3},
    {id: 4, name: "soda", stock: 20},
    {id: 5, name: "egg", stock: 4}
];

//for(let i =0; i<inventory.length; i++){
    
//}

inventory.forEach((producto)=> {
        if(producto.stock === 0){
            console.log("no hay stock de: " + producto.name);
        }else if(producto.stock <=5){
            console.log("Hay poco stock de: " + producto.name);
        }else if(producto.stock < 0){
            console.log("Error");
        }else{
            console.log("Disponible: "+producto.name);
        }
    })
inventory.forEach((producto) =>{
    console.log(producto);
})