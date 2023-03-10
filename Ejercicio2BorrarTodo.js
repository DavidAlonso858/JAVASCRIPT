function anade() {
    var añadirElemento = document.getElementById("lista");
    var valorCaja = document.getElementById("caja");
    var crearElemento = document.createElement("li");
    crearElemento.textContent = valorCaja.value;
    añadirElemento.appendChild(crearElemento);
}

function borrar() {
    var Lista = document.getElementById('lista') 
    var contenidoLista = Lista.getElementsByTagName('li');
    var tamanio = contenidoLista.length

    for (let index = 0; index < tamanio; index++) {
        Lista.removeChild(contenidoLista[0])
    }
}