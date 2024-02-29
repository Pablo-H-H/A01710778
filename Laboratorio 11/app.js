const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasConstrucciones = require('./routes/construcciones.routes');

app.use('/', rutasConstrucciones);

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
                    <p class="title" href="/">
                        Alckaleo
                    </p>
                    <p class="subtitle" href="/construir">
                        Juegos para aprender
                    </p>
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