const pantalla = document.querySelector(".smartwatch");
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



// Apagar y Encender Pantalla
btnIniciar.addEventListener("click", function(){
    if(encendido == true){
        
        // Pantalla Apagada
        pantalla.classList.add("blackout");

        // Ocultar elementos en pantalla
        items.style.display = "none";
        btnArriba.style.display = "none";
        btnAbajo.style.display = "none";
        btnIzquierda.style.display = "none";
        btnDerecha.style.display = "none";

        // Cambio a estado de apagado
        encendido = false;
    }else{
        setTimeout(() => {

        // Pantalla Encendida
        pantalla.classList.remove("blackout");

        // Mostrar elementos en pantalla
        items.style.display = "block";
        btnArriba.style.display = "block";
        btnAbajo.style.display = "block";
        btnIzquierda.style.display = "block";
        btnDerecha.style.display = "block";

        // Cambio a estado de encendido
        encendido = true
        }, 500);
    } 
});


// Cronómetro
btnIzquierda.addEventListener();


// Notificaciones
btnDerecha.addEventListener();

// Detalles/Información
btnArriba.addEventListener();

// Calculadora
btnAbajo.addEventListener