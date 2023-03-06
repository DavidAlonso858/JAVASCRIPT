function anade() {
    var añadirElemento = document.getElementById("lista");
    añadirElemento.innerHTML += "<li>prueba</li>";

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