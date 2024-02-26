console.log("Hola Mundo");

//fs es el modulo para menipular el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

//MAnear sincrona bloquea todo el resto del programa hasta que se termine de hacer lo requerido con el sistema sincrono


//Codigo asincrono
const arreglo = [100,389,129,902,18,832,123];

for(let i of arreglo){
    setTimeout(() => {
        console.log(i);
    }, i);
} 

const te_hackie = () => {
    console.log('hackiado');
};

setTimeout(te_hackie, 700);

//Es un modulo de node que contiene todas las funciones de un servidor web
const http = require('http');

const server = http.createServer(    (request, response) => {
    const header = `
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Laboratorio 5</title>
        <!-- <link rel="stylesheet" href="estilo.min.css"> -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <header>
            <section class="hero is-primary">
                <div class="hero-body">
                <p class="title" href="/">
                    Alckaleo
                </p>
                <p class="subtitle" href="/construir">
                    Juegos para aprender
                </p>
                </div>
            </section>

        </header>`
const footer = `                
            <footer class="footer">
                <div class="content has-text-centered">
                    <p class="subtitle is-4">
                        <h1>Creado con el editor de codigo: <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a> </h1>

                        <h3 class="title is-3">Pagina creada por <a href="https://www.facebook.com/alckaleo.comp/?locale=es_LA"><strong>Pablo Hazael Hurtado Mireles</strong></a> </h3> 
            
                        <h3 class="title is-3">Correo: h.h.m.pablo@gmail.com</h3>
            
                        <h3 class="title is-3">Matricula: A01710778</h3>
                    </p>
                </div>
            </footer>

            <!-- <script src="lab4.js"></script> -->
        </body>
        </html>
        `;
    console.log(request.url);

    if(request.url == "/"){
        response.setHeader('Content-Type','text/html');
        response.write(header);
        response.write(
            `
        
                <div class="container is-max-widescreen">
                    <section class="section">
                        <h2 class="title is-2">Que es Alckaleo?</h2>
                        <p class="subtitle is-4">Alckaleo es el nombre usado para publicar diferentes trabajos que varian desde videojuegos hasta musica, este mismo nombre se usa en Facebook, Youtube e Instagram para publicar su musica</p>
            
                        <h2 class="title is-2">Quien creo Alckaleo?</h2>
                        <p class="subtitle is-4">Alckaleo fue creado por Pablo Hazael Hurtado Mireles el 3 de marzo de 2022</p>
            
                        <h2 class="title is-2">¿Cuál es la diferencia entre Internet y la World Wide Web?</h2>
                        <p class="subtitle is-4">El internet es una red de computadoras que se conectan en todo el mundo mientras que la World Wide Web (web) son la coleccion de paginas que se encuentra sobre esa red de computadoras</p>
            
                        <h2 class="title is-2">¿Cuáles son las partes de un URL?</h2>
                        <p class="subtitle is-4">
                            Esquema (Scheme): Indica el protocolo utilizado para acceder al recurso.<br>
                            
                            Host: Es el nombre de dominio o la dirección IP del servidor donde se encuentra el recurso.<br>
                            
                            Puerto (Port): Indica el puerto de red en el servidor al que se debe conectar el cliente para establecer la conexión.<br>
                            
                            Ruta (Path): Especifica la ubicación del recurso en el servidor.<br>
                            
                            Consulta (Query): Se utiliza para enviar parámetros al servidor.<br>
                            
                            Fragmento (Fragment): Identifica una sección específica del recurso.<br>
                            
                            Ejemplo:<br>
                            <code>esquema://host:puerto/ruta?consulta#fragmento</code>
                        </p>
            
                        <h2 class="title is-2">¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</h2>
                        <p class="subtitle is-4">El metodo HTTP usado deberia ser el POST, esto es debido a que el método POST envía los datos del formulario en el cuerpo de la solicitud HTTP, en lugar de adjuntarlos a la URL como hace el método GET.</p>
            
                        <h2 class="title is-2">¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h2>
                        <p class="subtitle is-4"> El método GET se utiliza para solicitar datos de un recurso específico en el servidor. En este caso, el navegador envía una solicitud GET al servidor web para obtener la página asociada con el URL proporcionado.</p>
            
                        <h2 class="title is-2">Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h2>
                        <p class="subtitle is-4">Significa que la solicitud se procesó correctamente y que el servidor ha devuelto los datos solicitados.</p>
            
                        <h2 class="title is-2">¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h2>
                        <p class="subtitle is-4">Si, el código de respuesta HTTP 404 indica que el recurso solicitado no ha sido encontrado en el servidor. Esto puede deberse a diversas razones, como un enlace roto, una URL mal escrita, o incluso problemas en la configuración del servidor.</p>
            
                        <h2 class="title is-2">¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h2>
                        <p class="subtitle is-4">Si, el código de respuesta HTTP 500 indica un error interno del servidor, lo que significa que algo salió mal en el lado del servidor al procesar la solicitud del usuario. Este tipo de error 500 generalmente se asocia con problemas en la lógica de la aplicación</p>
            
                        <h2 class="title is-2">¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h2>
            
                        <p class="subtitle is-4">Cuando un atributo HTML está marcado como "deprecated" o "desaprobado", significa que aunque aún funciona, se considera obsoleto y se desaconseja su uso en favor de alternativas más modernas o estándares actuales.</p>
            
                        <h2 class="title is-2">¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</h2>
                        <p class="subtitle is-4">Algunas de las diferencias principales entre HTML 4 y HTML5 son las siguientes:<br>
                            Compatibilidad con multimedia<br>
                            Canvas y gráficos<br>
                            APIs y funcionalidades avanzadas<br>
                            Formularios mejorados<br>
                            Desaparición de elementos y atributos obsoletos<br>
                            Mejoras en el soporte para accesibilidad
                        </p>
            
                        <h2 class="title is-2">¿Qué componentes de estructura y estilo tiene una tabla?</h2>
                        <h3 class="title is-3">Componentes</h3>
                        <p class="subtitle is-4">
                            <strong>Table</strong>: Es el elemento principal que define la tabla<br>
                            <strong>tr</strong> (table row): Define una fila dentro de la tabla<br>
                            <strong>td</strong> (table data): Define una celda de datos dentro de una fila<br>
                            <strong>th</strong> (table header): Define una celda de encabezado dentro de una fila.<br>
                            <strong>thead</strong> (table head): Contiene las filas que se utilizan como encabezados de la tabla.<br>
                            <strong>tbody</strong> (table body): Contiene las filas que representan los datos principales de la tabla.<br>
                            <strong>tfoot</strong> (table foot): Contiene las filas que se utilizan como pie de página de la tabla.
                        </p>
                        <h3 class="title is-3">Estilos</h3>
                        <p class="subtitle is-4">
                            <strong>border</strong>: Define el estilo del borde de la tabla.<br>
                            <strong>border-collapse</strong>: Especifica si los bordes de las celdas deben colapsar en una sola línea o separarse.<br>
                            <strong>text-align</strong>: Controla la alineación del texto dentro de las celdas.<br>
                            <strong>background-color</strong>: Define el color de fondo de las celdas.<br>
                            <strong>padding</strong>: Controla el espacio interno de las celdas.
                        </p>
            
                        <h2 class="title is-2">¿Cuáles son los principales controles de una forma HTML5?</h2>
                        <h3 class="title is-3">input (varios tipos):</h3>
                        <ul>
                            <li><strong>input type="text"</strong>: Campo de texto de una línea.</li>
                            <li><strong>input type="password"</strong>: Campo de contraseña.</li>
                            <li><strong>input type="email"</strong>: Campo para ingresar direcciones de correo electrónico.</li>
                            <li><strong>input type="tel"</strong>: Campo para ingresar números de teléfono.</li>
                            <li><strong>input type="number"</strong>: Campo para ingresar números.</li>
                            <li><strong>input type="checkbox"</strong>: Casilla de verificación.</li>
                            <li><strong>input type="radio"</strong>: Botón de opción.</li>
                            <li><strong>input type="file"</strong>: Permite a los usuarios cargar archivos desde su dispositivo.</li>
                        </ul>
            
                        <h3 class="title is-3">textarea</h3>
                        <p class="subtitle is-4">
                            Permite a los usuarios ingresar texto en varias líneas.
                        </p>
                        
                        <h3 class="title is-3">select</h3>
                        <p class="subtitle is-4">
                            Permite a los usuarios seleccionar una opción de una lista desplegable.<br>
                            Contiene uno o más elementos <strong>option</strong>
                        </p>
            
                        <h3 class="title is-3">button</h3>
                        <p class="subtitle is-4">
                            Se utiliza para crear un botón en el formulario.<br>
                            Puede contener texto u otros elementos HTML.
                        </p>
            
                        <h3 class="title is-3">label</h3>
                        <p class="subtitle is-4">
                            Etiqueta asociada a un control de formulario.<br>
                            Mejora la accesibilidad y facilita hacer clic en el control asociado.
                        </p>
            
                        <h3 class="title is-3">fieldset y legend</h3>
            
                        <ul>
                            <li><strong>fieldset</strong>: Agrupa varios controles de formulario.</li>
                            <li><strong>legend</strong>: Proporciona una etiqueta descriptiva para el grupo de controles.</li>
                        </ul>
            
                        <h3 class="title is-3">datalist</h3>
                        <p class="subtitle is-4">
                            Proporciona una lista de opciones para un campo de texto, pero permite a los usuarios ingresar valores personalizados.<br>
                            Se combina comúnmente con un <strong>input type="text"</strong>.
                        </p>
            
                        <h3 class="title is-3">progress</h3>
                        <p class="subtitle is-4">
                            Muestra una barra de progreso para representar el estado de finalización de una tarea.
                        </p>
            
                        <h3 class="title is-3">meter</h3>
                        <p class="subtitle is-4">
                            Representa un valor dentro de un rango definido, como una escala de medición.
                        </p>
            
                        <h3 class="title is-3">Atributos</h3>
                        <ul>
                            <li><strong>required</strong>: Hace que un campo sea obligatorio.</li>
                            <li><strong>placeholder</strong>: Proporciona un texto de ejemplo dentro de un campo.</li>
                            <li><strong>pattern</strong>: Define un patrón de entrada válido para campos de texto.</li>
                        </ul>
            
                        <h2 class="title is-2">¿Qué tanto soporte HTML5 tiene el navegador de chrome?</h2>
                        <p class="subtitle is-4">
                            Google Chrome tiene un buen soporte para HTML5, y es uno de los navegadores más compatibles con las características y especificaciones de HTML5.
                        </p>
            
                        <h2 class="title is-2">¿Cuál es el ciclo de vida de los sistemas de información?</h2>
                        <p class="subtitle is-4">
                            El ciclo de vida de los sistemas de información y el ciclo de desarrollo de sistemas de información son dos conceptos interrelacionados pero distintos en el ámbito de la gestión y desarrollo de tecnología de la información.
                        </p>
            
                        <h2 class="title is-2">¿Cuál es el ciclo de desarrollo de sistemas de información?</h2>
                        <p class="subtitle is-4">
                            El ciclo de desarrollo de sistemas de información se refiere al proceso específico utilizado para crear un sistema de información desde la etapa de análisis y diseño hasta la implementación y mantenimiento. Este ciclo a menudo sigue un enfoque de desarrollo de software iterativo e incremental, y puede basarse en metodologías como el modelo en cascada, el modelo de desarrollo ágil, o enfoques híbridos.
                        </p>
            
                        <h2 class="title is-2">Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </h2>
                        <p class="subtitle is-4">El uso del modificador !important en CSS es una práctica que generalmente debe evitarse, ya que puede complicar la gestión del estilo y llevar a problemas de mantenimiento a largo plazo. </p>
            
                        <h2 class="title is-2">Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</h2>
                        <p class="subtitle is-4">Porque afectan tanto la estética como la usabilidad del sitio.  La imagen de fondo no debe afectar negativamente la legibilidad del contenido. </p>
            
                        <h2 class="title is-2">Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</h2>
                        <p class="subtitle is-4">En general, es aconsejable utilizar unidades relativas (% y vw/vh) cuando sea posible, ya que ofrecen una mayor flexibilidad y adaptabilidad a diferentes contextos y tamaños de pantalla.</p>
            
                        <h2 class="title is-2">¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</h2>
                        <p class="subtitle is-4">El uso de una versión minimizada del CSS ayuda a optimizar el rendimiento del sitio web al reducir el tamaño del archivo CSS y el tiempo de procesamiento del navegador.</p>
            
                        <h2 class="title is-2">¿Qué diferencias y semejanzas hay entre Java y JavaScript?</h2>
                        <p class="subtitle is-4">
                            Java se diseñó para ser independiente de la plataforma y orientado a objetos. <br>
                            JavaScript tiene como proposito la programación del lado del cliente en el navegador.
                        </p>
            
                        <h2 class="title is-2">¿Qué métodos tiene el objeto Date?</h2>
                        <p class="subtitle is-4">
                            <strong>getDate():</strong><br>
                            Devuelve el día del mes (número) para la fecha representada por el objeto Date.<br>
            
                            <strong>getMonth():</strong><br>
                            Devuelve el mes (número) para la fecha representada por el objeto Date. El mes se devuelve como un número entre 0 (enero) y 11 (diciembre).<br>
                            
                            <strong>getFullYear():</strong><br>
                            Devuelve el año (como número de cuatro dígitos) para la fecha representada por el objeto Date.<br>
            
                            <strong>getHours():</strong><br>
                            Devuelve la hora (número) para la fecha representada por el objeto Date. La hora se devuelve en formato de 24 horas.<br>
            
                            <strong>getMinutes():</strong><br>
                            Devuelve los minutos (número) para la fecha representada por el objeto Date.<br>
                        </p>
            
                        <h2 class="title is-2">¿Qué métodos tienen los arreglos?</h2>
                        <p class="subtitle is-4">
                            <strong>push():</strong><br>
                            Agrega uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.<br>
                            <strong>pop():</strong><br>
                            Elimina el último elemento del arreglo y lo devuelve. El arreglo se acorta en un elemento.<br>
                            <strong>shift():</strong><br>
                            Elimina el primer elemento del arreglo y lo devuelve. Los índices de los demás elementos se actualizan.<br>
                            <strong>unshift():</strong><br>
                            Agrega uno o más elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.<br>
                            <strong>splice():</strong><br>
                            Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.<br>
                        </p>
            
                        <h2 class="title is-2">¿Cómo se declara una variable con alcance local dentro de una función?</h2>
                        <p class="subtitle is-4">Se recomienda utilizar <strong>let</strong> y <strong>const</strong>, ya que <strong>let</strong> proporciona una mejor semántica de bloque y <strong>const</strong> ayuda a prevenir reasignaciones accidentales.</p>
            
                        <h2 class="title is-2">¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</h2>
                        <p class="subtitle is-4">Las funciones pueden modificar variables globales directamente. Esto puede ser problemático si varias funciones comparten y modifican la misma variable global.</p>
                    </section>
                </div>
        
                <script> document.write("<div class='container is-max-widescreen'>");
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
                </script>
        
                <div class="container is-max-widescreen">
                    <section class="section">
                        <h2 class="title is-2">Describe Material design</h2>
                        <p class="subtitle is-4">
                            Material Design es un sistema de diseño desarrollado por Google que se utiliza para crear interfaces de usuario (UI) consistentes y atractivas en diversas plataformas y dispositivos.
                        </p>
                    </section>
                </div>
            `);
        response.write(footer);
        response.end();
    }else if(request.url == "/construir" && request.method == "GET"){
        response.setHeader('Content-Type','text/html');
        response.write(header);
        response.write(
            `
            <h1 class="title">Agregar una construccion</h1>
            <form action= "/construir" method="POST">
                <label class="label" for="nombre">Nombre:</label>
                <input name="nombre" id="nombre" type="text" class="input"><br>

                <label class="label" for="imagen">Imgaen:</label>
                <input name="imagen" id="imagen" type="text" class="input"><br><br>
                <input type="submit" value="Construir" class="button is-success">
            </form>
            `
        );
        response.write(footer);
        response.end();

    }else if(request.url == "/construir" && request.method == "POST"){

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const imagen = datos_completos.split('&')[1].split('=')[1];
            console.log(imagen);
            construcciones.push({nombre: nombre, imagen: imagen});
            return response.end();
        });

    } else{
        //Cuando no se encuentra la busqueda dentro de la paguina web
        response.statusCode = 404;
        response.setHeader('Content-Type','text/html');
        response.write(header);
        response.write(`
            <p class="title">Lo que buscas no existe </p>
        `);
        response.write(footer);
        response.end();
    }
});

server.listen(3000);