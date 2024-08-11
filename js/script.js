const pantalla = document.querySelector(".smartwatch");
const pantalla2 = document.querySelector(".pantalla-2");
const pantalla3 = document.querySelector(".pantalla-3");
const pantalla4 = document.querySelector(".pantalla-4");
const pantalla5 = document.querySelector(".pantalla-5");
const pantalla6 = document.querySelector(".pantalla-6");
const btnIniciar = document.querySelector(".on-off");
const btnArriba = document.querySelector(".up");
const btnAbajo = document.querySelector(".down");
const btnIzquierda = document.querySelector(".left");
const btnDerecha = document.querySelector(".right");
const items = document.querySelector(".items");
const config = document.querySelector(".config");
const back = document.getElementById("back");

// Variable de encendido
let encendido = true;

// Wallpapers
const wallpaper1 = document.querySelector(".wallpapers div:nth-child(1) img");
const wallpaper2 = document.querySelector(".wallpapers div:nth-child(2) img");
const wallpaper3 = document.querySelector(".wallpapers div:nth-child(3) img");
const wallpaper4 = document.querySelector(".wallpapers div:nth-child(4) img");
const wallpaper5 = document.querySelector(".wallpapers div:nth-child(5) img");
const wallpaper6 = document.querySelector(".wallpapers div:nth-child(6) img");
let wallpaperActual = pantalla.style.backgroundImage;


// Inicializo el Smartwatch
inicio();


// Botón Iniciar: Apagar y Encender Pantalla
btnIniciar.addEventListener("click", function(){
    if(encendido == true){
        
        // Cambio a estado de apagado
        encendido = false;

        // Pantalla Apagada
        pantalla.classList.add("blackout");

        // Ocultar elementos en pantalla
        ocultarItems();

    }else{
        setTimeout(() => {
        
        // Cambio a estado de encendido
        encendido = true

        // Pantalla Encendida
        pantalla.classList.remove("blackout");

        // Mostrar elementos en pantalla
        inicio();

       
        
        }, 500);
    } 
});


// Pantalla Inicial
function inicio(){

    pantalla.style.backgroundImage = wallpaperActual;

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
    pantalla6.style.display = "none";
    
    // Reseteo funcionalidad de botones de navegación
    btnIzquierda.removeEventListener("click", inicio); 
    btnIzquierda.addEventListener("click", ()=>{
        btnIzquierdaInit();
    });

    btnDerecha.removeEventListener("click", inicio); 
    btnDerecha.addEventListener("click", ()=>{
        btnDerechaInit();
    });

    btnArriba.removeEventListener("click", inicio); 
    btnArriba.addEventListener("click", ()=>{
        btnArribaInit();
    });

    btnAbajo.removeEventListener("click", inicio); 
    btnAbajo.addEventListener("click", ()=>{
        btnAbajoInit();
    });
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
    pantalla6.style.display = "none";

    if(encendido == false){
        pantalla.style.backgroundImage = "none"
    }
}


// Botón Izquierda: Cronómetro
function btnIzquierdaInit(){
    ocultarItems();
    btnDerecha.style.display = "block";
    pantalla2.style.display = "block"; // Mostrando el cronómetro
    
    // Botón derecha lleva al home
    btnDerecha.addEventListener("click", inicio)
    }



// Botón Derecha: Notificaciones
function btnDerechaInit(){
    ocultarItems();
    btnIzquierda.style.display = "block";
    pantalla3.style.display = "block"; // Mostrando notificaciones

    // Botón izquierda lleva al home
    btnIzquierda.addEventListener("click", inicio);
    }


// Botón Arriba: Informacion
function btnArribaInit(){
    ocultarItems();
    btnAbajo.style.display = "block";
    pantalla4.style.display = "block"; // Mostrando apartado de información

    // Botón abajo lleva al home
    btnAbajo.addEventListener("click", inicio);
    }


// Botón Abajo: Calculadora
function btnAbajoInit(){
    ocultarItems();
    btnArriba.style.display = "block";
    pantalla5.style.display = "block"; // Mostrando la calculadora

    // Botón arriba lleva al home
    btnArriba.addEventListener("click", inicio);
    }



// // Cambiar Wallpaper
config.addEventListener("click",() => {
    ocultarItems();
    pantalla6.style.display = "block";
    back.addEventListener("click", inicio);

    wallpaper1.addEventListener("click", () =>{
        pantalla.style.backgroundImage = "url('img/inicio/wallpapers/wallpaper1.png')";
        wallpaperActual = pantalla.style.backgroundImage;
    });

    wallpaper2.addEventListener("click", () =>{
        pantalla.style.backgroundImage = "url('img/inicio/wallpapers/wallpaper2.png')";
        wallpaperActual = pantalla.style.backgroundImage;
    });

    wallpaper3.addEventListener("click", () =>{
        pantalla.style.backgroundImage = "url('img/inicio/wallpapers/wallpaper3.png')";
        wallpaperActual = pantalla.style.backgroundImage;
    });

    wallpaper4.addEventListener("click", () =>{
        pantalla.style.backgroundImage = "url('img/inicio/wallpapers/wallpaper4.png')";
        wallpaperActual = pantalla.style.backgroundImage;
    });

    wallpaper5.addEventListener("click", () =>{
        pantalla.style.backgroundImage = "url('img/inicio/wallpapers/wallpaper5.png')";
        wallpaperActual = pantalla.style.backgroundImage;
    });
        
    wallpaper6.addEventListener("click", () =>{
        pantalla.style.backgroundImage = "url('img/inicio/wallpapers/wallpaper6.png')";
        wallpaperActual = pantalla.style.backgroundImage;
    });
})
    

