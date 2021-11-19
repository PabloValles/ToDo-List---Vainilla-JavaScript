const formulario = document.getElementById("formulario");
const listaTareas = document.querySelector("#lista-tareas");
const input = document.querySelector("#input");
const template = document.querySelector("#template").content;
const fragment = document.createDocumentFragment();

//Tareas de ejemplo
let tareas = {
  1637351110061: {
    id: 1637351110061,
    texto: "Tarea #1",
    estado: false,
  },
  1637351204504: {
    id: 1637351204504,
    texto: "Tarea #2",
    estado: false,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  pintarTarea();
});

listaTareas.addEventListener("click", (e) => {
  btnAccion(e);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // Para obtener el valor que dice nuestro input, tenemos varias opciones
  //console.log(e.target[0].value);
  //console.log(e.target.querySelector("#tarea").value);
  console.log(input.value);

  //Crear tarea
  setTarea();
});

const setTarea = (e) => {
  // Validamos con trim
  if (input.value.trim() === "") {
    console.log("no has escrito nada");
    return; // Sale de la función
  }

  // Construimos la tarea objeto
  const tarea = {
    id: Date.now(), // Date.now(para generar un id por defecto)
    texto: input.value,
    estado: false,
  };

  // Agregamos la tarea al objeto tareas, al no tener el índice que le pasamos, lo agrega
  tareas[tarea.id] = tarea;

  //Reseteamos el formulario
  formulario.reset();
  input.focus();

  //Pintamos la terea
  pintarTarea(tarea);
};

const pintarTarea = () => {
  listaTareas.innerHTML = "";
  Object.values(tareas).forEach((tarea) => {
    // 1ro Clonar el template
    const clone = template.cloneNode(true);
    clone.querySelector("p").textContent = tarea.texto;

    fragment.appendChild(clone);
  });

  listaTareas.appendChild(fragment);
};

const btnAccion = (e) => {
  console.log(e);
};
