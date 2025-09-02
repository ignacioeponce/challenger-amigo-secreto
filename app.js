// Lista de los nombres de amigos
let amigos = [];

// Función para agregar un amigo a la lista de amigos

function agregarAmigo() {
  // Obtenemos el campo de entrada
  let input = document.getElementById("amigo");

  // Se Limpian espacios extra al inicio y al final
  let nombre = input.value.trim();

  // Validamos que el nombre no sea un vacío
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return; // Detenemos la función si está vacío
  }

  // Agregamos el nombre al array de amigos
  amigos.push(nombre);

  // Actualizamos la lista de amigos
  actualizarListaAmigos();

  // Limpiamos el campo de texto
  input.value = "";
}

// Función para actualizar la lista de amigos en el código HTML

function actualizarListaAmigos() {
  // Obtenemos el elemento UL donde se mostrarán los amigos
  let lista = document.getElementById("listaAmigos");

  // Limpiamos el contenido actual para evitar duplicados
  lista.innerHTML = "";

  // Recorremos el array amigos y creamos un <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    // Creamos un nuevo elemento <li>
    let nuevoItem = document.createElement("li");

    // Asignamos el texto del amigo actual
    nuevoItem.textContent = amigos[i];

    // Agregamos el <li> a la lista UL
    lista.appendChild(nuevoItem);
  }
}

// Función para sortear un amigo secreto

function sortearAmigo() {
  // Obtenemos el elemento donde mostraremos el resultado
  let resultado = document.getElementById("resultado");

  // Obtenemos la lista de amigos
  let lista = document.getElementById("listaAmigos");

  // Limpiamos el resultado anterior y ocultamos la lista
  resultado.innerHTML = "";
  lista.innerHTML = "";

  // Validamos que haya al menos un nombre en la lista
  if (amigos.length === 0) {
    let mensaje = document.createElement("li");
    mensaje.textContent = "No hay nombres para sortear.";
    resultado.appendChild(mensaje);
    return;
  }

  // Generamos un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);

  // Obtenemos el nombre sorteado
  let nombreSorteado = amigos[indice];

  // Mostramos el resultado
  let mensaje = document.createElement("li");
  mensaje.textContent = "El amigo secreto es: " + nombreSorteado;
  resultado.appendChild(mensaje);
}

