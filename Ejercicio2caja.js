function anade() {
    var añadirElemento = document.getElementById("lista");
    var valorCaja = document.getElementById("caja");
    var crearElemento = document.createElement("li");
    crearElemento.textContent = valorCaja.value;
    añadirElemento.appendChild(crearElemento);
        
    /**
     *OTRA FORMA DE HACER EL EJERCICIO
     *  
     * var elemento = document.createElement("li");
     * elemento.innerhtml = "David"
     * 
     * var lista = document.getElementById("lista");
     * lista.apperChild(elemento);
     */
}