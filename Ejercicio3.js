function nuevoDiv(){
    var Div = document.createElement("div");
    Div.innerHTML = "Se crea un nuevo Div";
    document.body.appendChild(Div);
}

function mostrarAlert() {
    alert("David Alonso García");
}

var crearDiv = document.getElementById("crearDiv");

crearDiv.addEventListener("click", nuevoDiv);
crearDiv.addEventListener("dblclick", mostrarAlert);

function agregarEstilo() {
    var crearDiv = document.getElementById("crearDiv");
    crearDiv.style.color = "blue";
    crearDiv.style.fontSize = "30px";
    crearDiv.style.backgroundColor = "yellow";
}
var pulsa = document.getElementById("pulsa");
pulsa.addEventListener("mouseover", agregarEstilo);