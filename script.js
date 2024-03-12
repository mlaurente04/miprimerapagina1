//alert("Hola este es mi Javascript");

//let nombre="Marcelo";
//var nombre1="Marcelo";
//const nombre2="Marcelo";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS erroneo

//let contenidotitulo = "Marcelo";
//let titulo = document.querySelector(".logo .fuente");
//titulo.innerHTML = contenidotitulo;



document.addEventListener("DOMContentLoaded", function() {

//SELECCIONAR ELEMENTOS 
    //let contenidoTitulo = "Marcelo";
    //let titulo = document.querySelector("#logo1");
    //titulo.innerHTML = contenidoTitulo;  

//CONDICIONALES

//let textoTitulo = titulo.innText;
//console.log(textoTitulo);
//if(textoTitulo == "Nombre"){
    //titulo.innerHTML = "Otro";
//} else{
   // console.log("no se cumple")
//}

//FUNCIONES

let nombre2="Ornamentales";
let ciudad="Cusco";
let gusto="promovemos";

let parrafo = document.querySelector(".parrafo1");

function cambiarTexto(nombre2, ciudad, gusto){
    //let contenido = `Me llamo ${nombre}, naci en ${ciudad} y vivo en Cusco. Me gusta la ${gusto} y salir a pasear en días de sol. Me encantaria aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
    let contenido = `En nuestro sitio web encontrarás una amplia gama de plantas ${nombre2} resistentes y tropicales, las plantas que ofrecemos se propagan de manera convencional ${ciudad}, es decir, mediante siembra, división y esquejes.        
    Damos gran importancia a la calidad de las plantas que ${gusto}.`;
    return contenido;    
}

parrafo.innerText = cambiarTexto(nombre2, ciudad, gusto);

//ALERTAS EN FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const Parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  Parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    Parrafo.innerHTML = warnings;
  } else {
    Parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
});

















