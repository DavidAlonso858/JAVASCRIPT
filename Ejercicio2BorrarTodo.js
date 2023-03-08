function anade() {
    var añadirElemento = document.getElementById("lista");
    var valorCaja = document.getElementById("caja");
    var crearElemento = document.createElement("li");
    crearElemento.textContent = valorCaja.value;
    añadirElemento.appendChild(crearElemento);
}

function borrar() {
    var lista = document.getElementById("lista");

    lista.remove(lista);
}