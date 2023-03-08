function anade() {
    var añadirElemento = document.getElementById("lista");
    var valorCaja = document.getElementById("caja");
    var crearElemento = document.createElement("li");
    crearElemento.textContent = valorCaja.value;
    añadirElemento.appendChild(crearElemento);
}

function borrar() {
    var lista = document.getElementById("lista");

    var ultimoElemento = lista.childNodes[lista.childNodes.length - 1];

    // Remove the last item from the list
    lista.removeChild(ultimoElemento);
}