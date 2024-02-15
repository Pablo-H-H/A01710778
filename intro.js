console.log("Hola");
console.info("Informacion");
console.warn("Advertencia");
console.error("Error Fatal");
console.assert(1==1);
console.assert(1==2);

var juego = "Minecraft";
const precio = 50;
let cantidad = 1;

alert("Hola");
const nombre = prompt("Como te llamas?");
console.log("Hola " + nombre)

const hambre = confirm("Tienes hambre?");
if (hambre){
    console.log("Es hora de desayunar");
} else {
    console.log("Sigamos trabajando");
}

function construir(){
    console.log("Construyendo casa");
}

construir();

//Funciones modernas
const casa = () => {
    console.log("Construyendo casa anonimamente");
};

const desayuno = (comida) => {
    console.log("El desayuno del dia de hoy es: " + comida);
}

desayuno("huevito");

const arreglo = ["Elemento"];
const arreglo2 = new Array();
arreglo.push("Otro elemento");
arreglo.push(5);

console.log(arreglo);

arreglo[10] = "Uno mas";
console.log(arreglo);

arreglo["dos"] = 8;
console.log(arreglo);

for (let i = 0; i < arreglo.length; i ++){
    console.log(arreglo[i]);
}

for ( let posicion in arreglo){
    console.log(posicion);
}

const objeto = { atributo: "valor", atributo2: "valor2"};
objeto.atributo3 = 5;
console.log(objeto);

for ( let atributo in objeto){
    console.log(atributo);
}

document.write("Hola");