// Selección de los elementos (Cronómetro y Botones)
const cronometro = document.getElementById("cronometro");
const btnInicioPausa = document.getElementById("boton-inicio-pausa");
const btnReiniciar = document.getElementById("boton-reiniciar");


let horas = 0;
let minutos = 0;
let segundos = 0;

let intervaloDeTiempo;
let estadoCronometro = "pausado";


function actualizarCronometro(){
    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;

        if(minutos === 60){
            minutos = 0;
            horas++;
        }
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerHTML = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo){
    if (unidadDeTiempo < 10){
        return "0" + unidadDeTiempo
    }else{
        return unidadDeTiempo;
    }
}


// Botón de Inicio/Pausa (FUNCIONALIDAD)
btnInicioPausa.addEventListener("click", function(){
    if(estadoCronometro == "pausado"){
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        btnInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        btnInicioPausa.classList.remove("iniciar");
        btnInicioPausa.classList.add("pausar")
        estadoCronometro = "iniciado"
    }else{
        window.clearInterval(intervaloDeTiempo);
        btnInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
        btnInicioPausa.classList.remove("pausar");
        btnInicioPausa.classList.add("iniciar")
        estadoCronometro = "pausado";
    }
});

// Botón de Reiniciar (FUNCIONALIDAD)
btnReiniciar.addEventListener("click", function(){
    window.clearInterval(intervaloDeTiempo)
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro.innerText = "00:00:00";
    btnInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
    btnInicioPausa.classList.remove("pausar");
    btnInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado"

})