const boton = document.querySelector("button");

boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el click llegue al div
    alert("Hola! Soy el botón");
});

document.getElementById("contenedor").addEventListener("click", function() {
    alert("Hola! Soy el div");
});
