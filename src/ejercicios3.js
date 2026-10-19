/////////Ejercicio 3: Buscar un coder en la lista////////////

const users = [
    { id: 1,name: "Carlos", email: "carlos@gmail.com" },
    { id: 2,name: "Ana", email: "ana@gmail.com" },
    { id: 3,name: "Pedro", email: "pedro@gmail.com" },
    { id: 4,name: "Pablo", email: "pablo@gmail.com" }
];

let option = 0
do {
    
    option = Number(prompt("--- DIGITE EL NUMERO DE LO QUE DESEA REALILIZAR ---\n1. ingresar nombre de usuario para ser encontrado: \n2. finalizar menu: "))

    if (option === 1) {
        
        let nameUser = prompt("digite el nombre de usuario a encontar: ");

        let userPosition = users.findIndex(user => user.name.trim().toLowerCase() === nameUser.trim().toLowerCase())

        if (userPosition !== -1) {
            console.log("El usuario "+ users[userPosition].name + "  Encontrado en posicion "+userPosition)
        }else{
            console.log("USUARIO NO REGISTRADO");
        }
    } else if(option === 2){
        console.log("Hasta luego :) ")
    }else{
        console.log("¡¡¡Numero Invalido!!!")
    }
    

} while (option !== 2);

