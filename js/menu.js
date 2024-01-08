const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

//Asignamos la info del local storage
nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

//Recuepro el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}
//Vamos a necesitar guardar las categorias que va jugando
let categoriasJugadas;
//Controlo si ya hay algo cargado en el local storage cuando vuelvo de juego.html para cargar las categorias ya jugadas
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS;
}else{//arreglo vaciar
    categoriasJugadas = [];
}
//Agrego un eventlistener a todas los botones de las categorias
function agregarEventListenerOpciones(){
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria=>{
        categoria.addEventListener("click",(e)=>{
            //console.log(e.currentTarget.id);
            localStorage.setItem("categoria-actual", e.currentTarget.id);
            //Agrego al arreglo categoria
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            //console.log(categoriasJugadas);
            //redirigir a la pagina juego.html
            location.href = "juego.html";
        });
    });
    //Desabilitar la categoria que ya se haya jugado
    categorias.forEach(categoria =>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    })
}

agregarEventListenerOpciones();