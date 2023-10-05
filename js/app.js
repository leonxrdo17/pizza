// Menu responsive
var botonMenuOpen = document.getElementById("botonMenuOpen"),
    botonMenuClose = document.getElementById("botonMenuClose"),
    menuResponsive = document.getElementById("menu-bar");
    enlaces = document.getElementById("enlaces");

// Click abrir
botonMenuOpen.addEventListener("click", function () {
    menuResponsive.classList.add("active");
});

// Click cerrar
botonMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");
});

// Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});

// SLIDER DE PRODUCTOS
var contenedor = document.querySelector('.slider'),
    botonIzquiero = document.getElementById("boton-izquierda"),
    botonDerecho = document.getElementById("boton-derecha");

// EVENTO PARA EL BOTON DERECHO
botonDerecho.addEventListener("click",function () {
    contenedor.scrollLeft += contenedor.offsetWidth;
});

// EVENTO PARA EL BOTON DERECHO
botonIzquiero.addEventListener("click",function () {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

// VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

function validar(e) {
    var inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        inputComents = document.getElementById("comentarios"),
        alertSucces = document.getElementById("alertSucces"),
        alertError = document.getElementById("alertError");

    if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0) {
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");

        setTimeout( function () {
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        }, 2000);
    }
    else{
        e.preventDefault();

        alertSucces.classList.remove("hide");
        alertSucces.classList.add("show");

        setTimeout( function () {
            alertSucces.classList.remove("show");
            alertSucces.classList.add("hide");
        }, 2000);

        inputNombre.value = "";
        inputEmail.value = "";
        inputComents.value = "";
    }
}

// EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);

// BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop,
        fullsize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;

    if (scroll > 100) {
        btnTop.classList.add("show");
    }
    else{
        btnTop.classList.remove("show");
    }

    // MODIFICAR ELEMENTO CUANDO LLEGUE AL FINAL DE LA PAGINA
    if (fullsize == (scroll+sizeVP)) {
        btnTop.classList.add("scrollFinal");
    }
    else{
        btnTop.classList.remove("scrollFinal");
    }
});

// DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
    window.scrollTo(0,0);
})

// DETECTAR EVENTO CLICK EN EL LOGO
logo.addEventListener("click", function () {
    window.scrollTo(0,0);
})