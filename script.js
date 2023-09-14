//alert("Hola este es mi Javascript");


//let nombre = "Luis Miguel Restrepo";
//let color="Negro"
//console.log(nombre)

//let cumpleaños = "5";

//console.log(cumpleaños) 

document.addEventListener("DOMContentLoaded", function () {
    const acercaDeMiElement = document.getElementById("acercaDeMi");

    const tiene16Anios = true;
    console.log(tiene16Anios);

    const textoSiCumple = "Conoce un poco de mi";
    const textoNoCumple = "Me presento";

    if (tiene16Anios) {
        acercaDeMiElement.innerHTML = textoSiCumple;
    } else {
        acercaDeMiElement.innerHTML = textoNoCumple;
    }
});


let etapa = "joven";
let palabra = "adquirir";
let palabra2 = "niño";

let parrafo = document.querySelector(".miparrafo");

function cambiartexto() {
    let contenido = `Hola, soy un ${etapa} de 16 años el cual tiene una motivación muy grande por obtener
    conocimientos de programación, este mundo es lo que me genera curiosidad y ganas de aprender. 
    Ahora la pregunta es ¿Qué me motivó para querer ${palabra} estos conocimientos? Bueno, primero que todo estos 
    conocimientos los quiero obtener porque es algo que tengo como meta en mi proyecto de vida, al igual que esto es 
    algo que desde ${palabra2} me llamó la atención y mi pensado es entrar a una universidad a estudiar programación o ingeniería en sistemas 
    y estoy en un curso para obtener conocimientos básicos sobre desarrollo web.`;

    return contenido;
}

parrafo.innerText = cambiartexto();

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
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
