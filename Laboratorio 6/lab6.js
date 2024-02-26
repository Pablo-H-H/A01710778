const boton = document.getElementById("boton_comprobar");
const input = document.getElementById("contrasenia_1");
const fountain = document.getElementById("cambiar_fuente")
const info = document.getElementById("info")

const consrtruir_casa = () => {
    const contra_1 = document.getElementById("contrasenia_1").value;
    const contra_2 = document.getElementById("contrasenia_2").value;

    console.log(contra_1);
    console.log(contra_2);

    const parrafo = document.getElementById("prrafo");

    if(contra_1 === contra_2){
        parrafo.innerHTML = "Contrasenia correcta";
    } else{
        parrafo.innerHTML = "Contrasenia no correcta";
    }



    boton.onclick = consrtruir_casa;
};


const lecto_texto = () => {
    const contra_1 = document.getElementById("contrasenia_1").value;
    let fuerza = 0;

    if (contra_1.length >= 8 && contra_1.length < 64){fuerza++}

    let mayuscula = /[A-Z]+/;
    let minuscula = /[a-z]+/;
    let numero = /[0-9]+/;
    let charact = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(mayuscula.test(contra_1)) {fuerza++}
    if(minuscula.test(contra_1)) {fuerza++}
    if(numero.test(contra_1)) {fuerza++}
    if(charact.test(contra_1)){fuerza++}

    const barra = document.getElementById("barrita");

    fuerza = (fuerza / 5) * 100;
    if(fuerza <= 20){
        barra.className = "progress is-danger"
    }else if (fuerza <= 60){
        barra.className = "progress is-warning"
    } else {
        barra.className = "progress is-success"
    }

    barra.value = fuerza;

    boton.onclick = consrtruir_casa;
};

const cambia_fount = () => {
    document.getElementById("cambio_font").style.fontFamily  = "Times New Roman";
}

const regresa_fount = () => {
    document.getElementById("cambio_font").style.fontFamily  = "Arial";
}

const pop_info = () => {
    document.getElementById("lainfo").className = "lainfo_activa";
}

const quit_info = () => {
    document.getElementById("lainfo").className = "lainfo_noactiva";
}

boton.onclick = consrtruir_casa;
input.addEventListener("input", lecto_texto)
fountain.onmouseover = cambia_fount;
fountain.onmouseout = regresa_fount;

info.onmouseover = pop_info;
info.onmouseout = quit_info;