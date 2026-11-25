
const boton = document.getElementById("menuToggle");
const menu = document.getElementById("navegacion");

boton.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
