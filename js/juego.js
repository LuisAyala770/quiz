const preguntas = [
    {
        id: 1,
        categoria: "kanto",
        titulo: "En la Pokedex, ¿Que Pokémon tiene el número 48?",
        opcionA: "Oddish",
        opcionB: "Diglett",
        opcionC: "Psyduck",
        opcionD: "Venonat",
        correcta: "d",
    },
    {
        id: 2,
        categoria: "kanto",
        titulo: "¿Cual es el Pokémon más pesado de Kanto?",
        opcionA: "Snorlax",
        opcionB: "Rhydon",
        opcionC: "Golem",
        opcionD: "Dragonite",
        correcta: "a",
    },
    {
        id: 3,
        categoria: "kanto",
        titulo: "¿Cuantos picos tiene Starmie",
        opcionA: "12",
        opcionB: "10",
        opcionC: "8",
        opcionD: "14",
        correcta: "b",
    },
    {
        id: 4,
        categoria: "kanto",
        titulo: "Según la página pokemon.com, ¿Que Pokémon es confundido frecuentemente con una sirena?",
        opcionA: "Gyarados",
        opcionB: "Seel",
        opcionC: "Vaporeon",
        opcionD: "Dragonair",
        correcta: "c",
    },
    {
        id: 5,
        categoria: "kanto",
        titulo: "¿Que número en la Pokédex es Moltres'",
        opcionA: "145",
        opcionB: "146",
        opcionC: "143",
        opcionD: "147",
        correcta: "b",
    },
    {
        id: 6,
        categoria: "johto",
        titulo: "¿Cual es el orden en la Pokédex de los siguientes Pokémons?",
        opcionA: "Totodile, Cyndaquil y Chikorita",
        opcionB: "Chikorita, Cyndaquil y Totodile",
        opcionC: "Cyndaquil, Chikorita y Totodile",
        opcionD: "Totodile, Chikorita y Cyndaquil",
        correcta: "b",
    },
    {
        id: 7,
        categoria: "johto",
        titulo: "¿Como evoluciona Pichu?",
        opcionA: "Esfera luminoza + 1 nivel",
        opcionB: "Piedra Trueno",
        opcionC: "Amistad alta + 1 nivel",
        opcionD: "Al nivel 22",
        correcta: "c",
    },
    {
        id: 8,
        categoria: "johto",
        titulo: "Según la Pokédex, ¿Que número es Sudowoodo?",
        opcionA: "183",
        opcionB: "181",
        opcionC: "185",
        opcionD: "189",
        correcta: "c",
    },
    {
        id: 9,
        categoria: "johto",
        titulo: "¿Cual es la evolución de Remoraid?",
        opcionA: "Qwilfish",
        opcionB: "Wooper",
        opcionC: "Mantine",
        opcionD: "Octillery",
        correcta: "d",
    },
    {
        id: 10,
        categoria: "johto",
        titulo: "¿Que tipo/s es Unown?",
        opcionA: "Normal",
        opcionB: "Psíquico/Normal",
        opcionC: "Siniestro",
        opcionD: "Psíquico",
        correcta: "d",
    },
    {
        id: 11,
        categoria: "hoenn",
        titulo: "¿Cual es el Pokémon que cuenta con 1PS?",
        opcionA: "Sableye",
        opcionB: "Shedinja",
        opcionC: "Shuppet",
        opcionD: "Duskull",
        correcta: "b",
    },
    {
        id: 12,
        categoria: "hoenn",
        titulo: "¿Cual es la primera evolución de Salamence?",
        opcionA: "Bagon",
        opcionB: "Spheal",
        opcionC: "Feebas",
        opcionD: "Beldum",
        correcta: "a",
    },
    {
        id: 13,
        categoria: "hoenn",
        titulo: "¿Cuantos cuernos tiene Corphish en la cabeza?",
        opcionA: "Dos",
        opcionB: "Cuatro",
        opcionC: "Tres",
        opcionD: "Cinco",
        correcta: "c",
    },
    {
        id: 14,
        categoria: "hoenn",
        titulo: "Según la Pokédex, ¿Que número es Milotic?",
        opcionA: "360",
        opcionB: "349",
        opcionC: "372",
        opcionD: "350",
        correcta: "d",
    },
    {
        id: 15,
        categoria: "hoenn",
        titulo: "¿Que tipo/s es Jirachi?",
        opcionA: "Hada/Psíquico",
        opcionB: "Acero/Psíquico",
        opcionC: "Psíquico",
        opcionD: "Hada/Acero",
        correcta: "b",
    },
    {
        id: 16,
        categoria: "sinnoh",
        titulo: "Según la Pokédex, ¿Que Pokémon es más rápido?",
        opcionA: "Arceus",
        opcionB: "Darkrai",
        opcionC: "Shaymin (Forma Cielo)",
        opcionD: "Weavile",
        correcta: "c",
    },
    {
        id: 17,
        categoria: "sinnoh",
        titulo: "¿Cuales son las eeveelutions  de Sinnoh",
        opcionA: "Espeon y Umbreon",
        opcionB: "Vaporeon, Jolteon y Flareon",
        opcionC: "Sylveon",
        opcionD: "Leafeon y Glaceon",
        correcta: "d",
    },
    {
        id: 18,
        categoria: "sinnoh",
        titulo: "Según la Pokédex, ¿Que número es Rotom?",
        opcionA: "489",
        opcionB: "479",
        opcionC: "480",
        opcionD: "470",
        correcta: "b",
    },
    {
        id: 19,
        categoria: "sinnoh",
        titulo: "¿Comó evoluciona Togetic a Togekiss?",
        opcionA: "Aprendiendo movimiento Vuelo + 1 nivel",
        opcionB: "Al nivel 33",
        opcionC: "Amistad + 1 nivel",
        opcionD: "Piedra día",
        correcta: "d",
    },
    {
        id: 20,
        categoria: "sinnoh",
        titulo: "Electivire (la evolución de Electabuzz) ¿Cuantos cables tiene en su espalda?",
        opcionA: "Seis",
        opcionB: "Tres",
        opcionC: "Dos",
        opcionD: "Cuatro",
        correcta: "c",
    },
    {
        id: 21,
        categoria: "teselia",
        titulo: "En Teselia, ¿Cual es el Pokémon Pseudo Legendario?",
        opcionA: "Hydreigon",
        opcionB: "Tyranitar",
        opcionC: "Garchomp",
        opcionD: "Salamence",
        correcta: "a",
    },
    {
        id: 22,
        categoria: "teselia",
        titulo: "¿Cual de los siguientes Pokemons NO pertenece a los iniciales de Teselia?",
        opcionA: "Oshawott",
        opcionB: "Tepig",
        opcionC: "Fennekin",
        opcionD: "Snivy",
        correcta: "c",
    },
    {
        id: 23,
        categoria: "teselia",
        titulo: "¿Cual es la habilidad oculta de Golurk?",
        opcionA: "Bromista",
        opcionB: "Liviano",
        opcionC: "Presión",
        opcionD: "Indefenso",
        correcta: "d",
    },
    {
        id: 24,
        categoria: "teselia",
        titulo: "¿Según la Pokédex, ¿Que número es Volcarona?",
        opcionA: "640",
        opcionB: "637",
        opcionC: "629",
        opcionD: "611",
        correcta: "b",
    },
    {
        id: 25,
        categoria: "teselia",
        titulo: "¿Que tipo/s es Terrakion?",
        opcionA: "Tierra/Roca",
        opcionB: "Roca/Acero",
        opcionC: "Tierra/Normal",
        opcionD: "Roca/Lucha",
        correcta: "d",
    },
    {
        id: 26,
        categoria: "kalos",
        titulo: "¿Cuales son los Pokemons iniciales de Kalos?",
        opcionA: "Turtwig, Chimchar y Piplup",
        opcionB: "Treecko, Torchic y Mudkip",
        opcionC: "Chespin, Fennekin y Froakie",
        opcionD: "Rowlet, Litten y Popplio",
        correcta: "c",
    },
    {
        id: 27,
        categoria: "kalos",
        titulo: "¿Como evoluciona Phantump a Trevenant?",
        opcionA: "Al nivel 40",
        opcionB: "Piedra Oscura",
        opcionC: "En la noche + 1 nivel",
        opcionD: "Intercambio",
        correcta: "d",
    },
    {
        id: 28,
        categoria: "kalos",
        titulo: "¿Cual es el pokemon más largo de Kalos?",
        opcionA: "Yvelta",
        opcionB: "Xerneas",
        opcionC: "Aurorus",
        opcionD: "Zygarde",
        correcta: "a",
    },
    {
        id: 29,
        categoria: "kalos",
        titulo: "Según la Pokédex, ¿Que número es Noivern?",
        opcionA: "700",
        opcionB: "710",
        opcionC: "705",
        opcionD: "715",
        correcta: "d",
    },
    {
        id: 30,
        categoria: "kalos",
        titulo: "¿Como evolucionar a Inkay a Malamar en consolas?",
        opcionA: "Nivel 33",
        opcionB: "Piedra Agua",
        opcionC: "Nivel 30 + consola de cabeza",
        opcionD: "Isla espuma + 1 nivel",
        correcta: "c",
    }
]

//Tomamos los elementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
//mantengo el número de pregunta actual de las 5 preguntas
let numPreguntaActual = 0;
//controlo el puntaje que lleva hasta el momento
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){//Si no existe es porque esta empezando el juego
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//Cargo las preguntas del tema que eligío
const categoriaActual = localStorage.getItem("categoria-actual");
//console.log(categoriaActual);
//Me quedo con las pregunas del tema elegido
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);
//console.log(preguntasCategoria);

//Carga la siguiente pregunta y sus opciones
function cargarSiguientePregunta(num){
    //Tomo los elementos de html
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    //Agregar el eventolistener a cada boton de las respuestas
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los event listener y las clases que ya tengas asignadas de la respuesta anterior
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    });

    //Aqui se donde agregarla funcion que manejar el clik de cada boton
    botonesRespuesta.forEach(opcion =>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    });

    txtPuntaje.classList.remove("efecto");
}

cargarSiguientePregunta(numPreguntaActual);

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);

    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }

    //Agrego un eventlistener a cada boton respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //quito los eventlistener a cada boton para que no pueda seguir haciendo clic en las respuestas una vez que haya elegido una respuesta
    botonesRespuesta.forEach(opcion =>{
        opcion.classList.add("no-events");
    })
}

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", ()=>{
    numPreguntaActual++;
    //Controlo si he llegado al final de las cinco preguntas
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }else{//al llegar al final

        //necesito saber si ya ha jugado todas las categorias para mandarlo al menu o al final del juego
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
        if(parseInt(categoriasJugadasLS.length) < 6){//todavía hay categorias por jugar
            location.href = "menu.html";
        }else{
            location.href = "final.html";
        }
    }
})