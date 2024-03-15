let personas = [];
function capturaDatos() {
  console.log("Capturando datos...");
  let persona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    ciudad: document.getElementById("ciudad").value,
  };
  personas.push(persona);
  mostrarCards();
}
function mostrarCards() {
  document.getElementById("cards").innerHTML = "";
  personas.map(function (persona) {
    let card = document.createElement("section");
    let nombre = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let fecha = document.createElement("p");
    let ciudad = document.createElement("p");
    nombre.textContent = persona.nombre;
    correo.textContent = persona.correo;
    telefono.textContent = persona.telefono;
    fecha.textContent = persona.fecha;
    ciudad.textContent = persona.ciudad;
    card.append(nombre, correo, telefono, fecha, ciudad);
    document.getElementById("cards").append(card);
  });
}
let inputs = document.querySelectorAll("#formulario input");
// console.log(inputs)
inputs.forEach(function (input) {
  // console.log(input)
  // input.addEventListener("click", validarFormulario);
  // input.addEventListener("blur", validarFormulario);
  input.addEventListener("keyup", validarFormulario);
});

let expresionesRegulares = {
  nombre: /^[a-zA-Z]+$/,
  email: /\b([\w\.-]+)@([\w\-]+)(\.\w{2,4})(\.\w{2,4})?\b/g,
  telefono: /^(([2]{1})|([6-7]{1}))([0-9]{3})[\-]?([0-9]{4})$/,
  fechaNacimiento: /((([0][1-9]|[12][\d])|[3][01])[-/]([0][13578]|[1][02])[-/][1-9]\d\d\d)|((([0][1-9]|[12][\d])|[3][0])[-/]([0][13456789]|[1][012])[-/][1-9]\d\d\d)|(([0][1-9]|[12][\d])[-/][0][2][-/][1-9]\d([02468][048]|[13579][26]))|(([0][1-9]|[12][0-8])[-/][0][2][-/][1-9]\d\d\d)/gm,
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "nombre":
      if (expresionesRegulares.nombre.test(e.target.value)) {
        document.getElementById("nombre").textContent="";
        document.getElementById("nombre").style.borderBottomColor="";
       
      } else {
      
        document.getElementById("nombre").style.borderBottomColor="red";
      }
      break;

    case "email":
      if (expresionesRegulares.email.test(e.target.value)) {
        console.log("Pasó la validacion");
      } else {
        console.log("No pasó la validacion");
      }
      break;

    case "telefono":
      if (expresionesRegulares.telefono.test(e.target.value)) {
        console.log("Pasó la validacion");
      } else {
        console.log("No pasó la validacion");
      }
      break;

    case "fechaNacimiento":
      if (expresionesRegulares.fechaNacimiento.test(e.target.value)) {
        console.log("Pasó la validacion");
      } else {
        console.log("No pasó la validacion");
      }
      break;

    case "ciudad":
      if (expresionesRegulares.nombre.test(e.target.value)) {
        console.log("Pasó la validacion");
      } else {
        console.log("No pasó la validacion");
      }
      break;
  }
}
