function anade() {
    var añadirElemento = document.getElementById("lista");
    var valorCaja = document.getElementById("caja");
    var crearElemento = document.createElement("li");
    crearElemento.textContent = valorCaja.value;
    añadirElemento.appendChild(crearElemento);
}

function borrar() {
    var elementolista = document.getElementById("lista");
    
    elementolista.firstChild.remove();
  
  
  /*Otra forma de hacerlo

    var lista = document.getElementById("lista");

    var PrimerElemento = lista.childNodes[0];

    // Remove the last item from the list
    lista.removeChild(PrimerElemento);
  */  
}