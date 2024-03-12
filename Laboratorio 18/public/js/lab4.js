
document.write("<div class='container is-max-widescreen'>");
document.write("<h1>Saldas de JavaScript</h1>");

// 1:
// Entrada: un número pedido con un prompt. 
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
const numero = prompt("Ingresa un numero");

document.write("<table class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>");
document.write("<tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (let i = 1; i <= numero; i ++){
    let cuad = i * i;
    let cubo = cuad * i;
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + cuad + "</td>");    
    document.write("<td>" + cubo + "</td>");
    document.write("</tr>");
}

document.write("</table>");

// 2:
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
// Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.


function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

let var1 = randomNumber(20);
let var2 = randomNumber(15);
let res = var1 + var2;

let tiempoInicio = new Date().getTime();
const res_numero = prompt("Cuanto es " + var1 + " + " + var2 + "?");
document.write("<p class='subtitle is-4'> Cuanto es " + var1 + " + " + var2 + "? <br>");

let tiempoFin = new Date().getTime();
let tiempoTotal = (tiempoFin - tiempoInicio)/1000;

if(res == res_numero){
    document.write("Correcto, la respuesta es " + res + " y te tardaste: " + tiempoTotal + " segundos </p>");
} else{
    document.write ("Incorrecto, la respuesta es " + res + " y te tardaste: " + tiempoTotal + " segundos </p>");
}

// 3:
// Función: contador. 
// Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

function contador(arreglo){
    let negativos = 0;
    let ceros = 0;
    let postiviso = 0;

    for (let variable of arreglo){

        if(variable < 0){
            negativos++;
        } else if(variable == 0){
            ceros++;
        } else if(variable > 0){
            postiviso++;
        }
    }

    let resultado = {
        negativos: negativos,
        ceros: ceros,
        postivos: postiviso
    };

    return resultado;
}

let miArreglo = [-2, 0, 5, -1, 0, 10];
console.log(contador(miArreglo));

// 4:
// Función: promedios. 
// Parámetros: Un arreglo de arreglos de números. 
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function promedios (matriz){

    let sumatoria,  i ;
    let prom = [];
    for(let numbs of matriz){
        sumatoria = 0;
        i = 0;

        for(let numeros of numbs){
            sumatoria = sumatoria + numeros;
            i++;
        }
        prom.push(sumatoria/i);
    }
    return prom;
}

let miMatriz = [[-2, 0, -5, -1, 0, -10],
               [2, 0, 5, 1, 0, 10]];
console.log(promedios(miMatriz));

// 5:
// Función: inverso. 
// Parámetros: Un número. 
// Regresa: El número con sus dígitos en orden inverso.

function numeroInverso(numero){
    let numeroInv = 0;
    while((numero) / 10 > 0){
        numeroInv = (numeroInv * 10) + numero % 10;
        numero = Math.floor(numero/10);
    }
    return numeroInv;
}

let miNumerote = 1234567;
console.log(numeroInverso(miNumerote));


document.write("<p class='subtitle is-4'>6:<br> Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML. </p>")
document.write("<p class='subtitle is-4'>Este es un creador de ecuaciones basicas para estadistica, en donde se crea una lista de numeros y se entrega el promedio y la media.<p class='subtitle is-4'>")

function CalculadoraEstadistica() {
    this.listaNumeros = [];
}

CalculadoraEstadistica.prototype.agregarElemento = function(elemento) {
this.listaNumeros.push(elemento);
};

CalculadoraEstadistica.prototype.calcularPromedio = function() {
    if (this.listaNumeros.length === 0) {
        return "La lista está vacía.";
    }

    var suma = this.listaNumeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    return suma / this.listaNumeros.length;
};

CalculadoraEstadistica.prototype.calcularMedia = function() {
    if (this.listaNumeros.length === 0) {
    return "La lista está vacía.";
    }

    let medio = (this.listaNumeros.length / 2);
    let resultado_medio = [];

    if(this.listaNumeros.length % 2 != 0){

        resultado_medio.push(this.listaNumeros[Math.floor(medio)]);
    } else{
        
        let bajo = (medio - 1);
        let alto = (medio);

        resultado_medio.push(this.listaNumeros[bajo]);
        resultado_medio.push(this.listaNumeros[alto]);
    }
    return resultado_medio;
};

var calculadora = new CalculadoraEstadistica();

calculadora.agregarElemento(2);
calculadora.agregarElemento(4);
calculadora.agregarElemento(6);
calculadora.agregarElemento(2);
calculadora.agregarElemento(3);
calculadora.agregarElemento(1);

document.write("<p class='subtitle is-4'>Lista de Números: " + calculadora.listaNumeros.join(", ") + "</p>");
document.write("<p class='subtitle is-4'>Promedio: " + calculadora.calcularPromedio() + "</p>");
document.write("<p class='subtitle is-4'>Media: " + calculadora.calcularMedia().join(", ") + "</p>");

document.write("</div>");