const pantalla = document.querySelector(".smartwatch");
const pantalla2 = document.querySelector(".pantalla-2");
const pantalla3 = document.querySelector(".pantalla-3");
const pantalla4 = document.querySelector(".pantalla-4");
const pantalla5 = document.querySelector(".pantalla-5");
const items = document.querySelector(".items");
const reloj = document.querySelector(".clock");
const fecha = document.querySelector(".calendar");
const config = document.querySelector(".config");
const battery = document.querySelector(".battery");
const btnIniciar = document.querySelector(".on-off");
const btnArriba = document.querySelector(".up");
const btnAbajo = document.querySelector(".down");
const btnIzquierda = document.querySelector(".left");
const btnDerecha = document.querySelector(".right");



let encendido = true;
let pagina = ["inicio", "cronometro", "notificaciones", "informacion", "calculadora"];
let paginaActual = pagina[0];


// Inicializo el Smartwatch
inicio();




// Apagar y Encender Pantalla
btnIniciar.addEventListener("click", function(){
    if(encendido == true){
        
        // Pantalla Apagada
        pantalla.classList.add("blackout");

        // Ocultar elementos en pantalla
        ocultarItems();

        // Cambio a estado de apagado
        encendido = false;
    }else{
        setTimeout(() => {

        // Pantalla Encendida
        pantalla.classList.remove("blackout");

        // Mostrar elementos en pantalla
        inicio();

        // Cambio a estado de encendido
        encendido = true
        }, 500);
    } 
});



//---------------------------------------------------


// Pantalla Inicial
function inicio(){
    
    // Mostrando íconos y botones iniciales
    items.style.display = "block";
    btnArriba.style.display = "block";
    btnAbajo.style.display = "block";
    btnIzquierda.style.display = "block";
    btnDerecha.style.display = "block";
    pantalla2.style.display = "none";
    pantalla3.style.display = "none";
    pantalla4.style.display = "none";
    pantalla5.style.display = "none";
    
    // Reseteo funcionalidad de botones de navegación
    btnIzquierda.removeEventListener("click", inicio); //--
    btnIzquierda.addEventListener("click", ()=>{
        btnIzquierdaInit();
    })

    btnDerecha.removeEventListener("click", inicio); //--
    btnDerecha.addEventListener("click", ()=>{
        btnDerechaInit();
    });

    btnDerecha.removeEventListener("click", inicio); //--
    btnArriba.addEventListener("click", ()=>{
        btnArribaInit();
    });

    btnAbajo.removeEventListener("click", inicio); //--
    btnAbajo.addEventListener("click", ()=>{
        btnAbajoInit();
    })
}

// Limpiar Pantalla
function ocultarItems(){
    items.style.display = "none";
    btnArriba.style.display = "none";
    btnAbajo.style.display = "none";
    btnIzquierda.style.display = "none";
    btnDerecha.style.display = "none";

    // Ocultando pantallas secundarias
    pantalla2.style.display = "none";
    pantalla3.style.display = "none";
    pantalla4.style.display = "none";
    pantalla5.style.display = "none";
}


// Botón Izquierda: Cronómetro
function btnIzquierdaInit(){
    paginaActual = pagina[1]; 
    ocultarItems();
    btnDerecha.style.display = "block";

    // Mostrando el cronómetro
    pantalla2.style.display = "block";


    if(paginaActual == "cronometro"){
        btnDerecha.addEventListener("click", inicio)
    }
}


// Botón Derecha: Notificaciones
function btnDerechaInit(){
    paginaActual = pagina[2]; 
    ocultarItems();
    btnIzquierda.style.display = "block";

     // Mostrando el cronómetro
     pantalla3.style.display = "block";

    if(paginaActual == "notificaciones"){
        btnIzquierda.addEventListener("click", inicio);
    }
}


// Botón Arriba: Informacion
function btnArribaInit(){
    paginaActual = pagina[3]; 
    ocultarItems();
    btnAbajo.style.display = "block";

    // Mostrando apartado de información
    pantalla4.style.display = "block";

    if(paginaActual == "informacion"){
        btnAbajo.addEventListener("click", inicio);
    }
}

// Botón Abajo: Calculadora
function btnAbajoInit(){
    paginaActual = pagina[4]; 
    ocultarItems();
    btnArriba.style.display = "block";

     // Mostrando la calculadora
     pantalla5.style.display = "block";

    if(paginaActual == "calculadora"){
        btnArriba.addEventListener("click", function(){
            inicio();
        });
    }
}



