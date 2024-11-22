// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada y lista para usarse.");
});

// menu
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show"); // Alterna la clase "show"
    });
});
