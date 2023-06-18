
let ticket = 200;
let estudiante = 89;
let trainee = 100;
let junior = 174;
let categoria = document.getElementById("categoria").value;
let cantidad = document.getElementById("cantidad").value;


const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const botonEnviar = document.getElementById("resumen");
const email = document.getElementById("email");
const expRegular = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

function validarNombre() {
    if (nombre.value.length<3) {
    document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es válido";
    }
}

function validarApellido() {
    if (apellido.value.length<3) {
    document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es válido";
    }
}

function validarEmail() {
    if(!expRegular.test(email.value)) {
        document.getElementById("errorCorreo").innerHTML = "El email es incorrecto";
    } else {
        document.getElementById("errorCorreo").innerHTML = "El email es correcto";
    }
}

function compra(cantidad, categoria) {
    let compraTotal = cantidad * categoria;
    return document.getElementsById("precioTotal").innerHTML = compraTotal;
}

compra(); 




botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", compra);
botonEnviar.addEventListener("click", validarEmail);
/*validarNombre();*/

console.log("eventos");
console.log("funciones");
console.log("cantidad");
console.log("categoria");


function suma (numero1, numero2) {
    console.log(numero1);
    console.log(numero2);
    let sumaTotal = numero1 + numero2;
    return sumaTotal;
}


let selCategoria = document.getElementById("categorias").value;
console.log(selCategoria);

document.getElementById("p1").innerHTML = suma2030;