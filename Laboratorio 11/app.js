const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const construcciones = [{
    nombre: "casa", 
    imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
}
];

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/construir', (request, response, next) => {
    console.log(request.body);
    response.send(`
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
                    <a class="title" href="/">
                        Alckaleo
                    </a>
                    <a class="subtitle" href="/construir">
                        Juegos para aprender
                    </a>
                    </div>
                </section>
    
            </header>
    
            <h1 class="title">Agregar una construccion</h1>
            <form action= "/construir" method="POST">
                <label class="label" for="nombre">Nombre:</label>
                <input name="nombre" id="nombre" type="text" class="input"><br>
    
                <label class="label" for="imagen">Imgaen:</label>
                <input name="imagen" id="imagen" type="text" class="input"><br><br>
                <input type="submit" value="Construir" class="button is-success">
            </form>
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
    `); 
});

app.post('/construir', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    console.log(construcciones);
    response.redirect('/');
})

app.get('/',(request, response, next) => {
    console.log('Ruta "/"');
    let html_respuesta = (`
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
                    <a class="title" href="/">
                        Alckaleo
                    </a>
                    <a class="subtitle" href="/construir">
                        Juegos para aprender
                    </a>
                </div>
            </section>

        </header>`);
        for (let construccion of construcciones) {
            html_respuesta += (`

            <h1 class="title"> Nombre de la construccion: ${construccion.nombre}</h1>
            <h1 class="title"> URL de la Imagen de la construccion: ${construccion.imagen}</h1>`);
        }

        html_respuesta += (`
        <p class="subtitle">
            Describe el archivo package.json.
        </p>
        <p> El archivo package.json es esencial en proyectos de Node.js porque centraliza la información clave del proyecto y sus dependencias. Facilita la gestión de dependencias, el despliegue y la colaboración entre desarrolladores.  </p>

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
    `); //Manda la respuesta
    response.send(html_respuesta);
});

app.use((request, response, next) => {
    response.status(404).send(`
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
                        <a class="title" href="/">
                            Alckaleo
                        </a>
                        <a class="subtitle" href="/construir">
                            Juegos para aprender
                        </a>
                    </div>
                </section>
    
            </header>
    
            <h1 class="title">Esta pagina no existe</h1>
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
    `);
});

app.listen(3000);