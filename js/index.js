//Tomo los elementos del html
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

//Agrego un event listener al boton comenzar
btnComenzar.addEventListener("click", ()=>{
    //Seteo los valores del localstorage que seran necesarios
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0)
    //Elimino del local storage las categorias que ya jugo
    localStorage.removeItem("categorias-jugadas")

    //Lo dirijo a la parte del menu
    location.href = "menu.html"
})