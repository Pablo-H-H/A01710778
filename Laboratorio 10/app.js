const filesystem = require('fs');

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
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGGUYYQktqpnV0_q6sp35JlYo5I5HFdceYToGwT9fpuPgwauiBYOfLFFQHA&s" width="40" height="80">
                  </a>
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item" href="/">
                      Home
                    </a>
              
                    <a class="navbar-item" href="/construir">
                      Construir
                    </a>
              
                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                        More
                      </a>
              
                      <div class="navbar-dropdown">
                        <a class="navbar-item">
                          About
                        </a>
                        <a class="navbar-item">
                          Jobs
                        </a>
                        <a class="navbar-item">
                          Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                          Report an issue
                        </a>
                      </div>
                    </div>
                  </div>
              
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-primary">
                          <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

        </header>

        <section class="section">
          <div class="container">
            <div class="columns">
`;

const footer = 
`           
            
             </div>
            </div>
        </section>


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
    </body>
</html>
`;

const construcciones = [{nombre: "casa", imagen: "Este es un texto nativo de construcciones"}];

//Es un modulo de node que contiene todas las funciones de un servidor web
const http = require('http');

const server = http.createServer(    (request, response) => {

    console.log(request.url);

    if(request.url == "/"){

        response.setHeader('Content-Type','text/html');
        response.write(header);
        let tarjetas_construcciones = '';
        for(let construccion of construcciones) {
        tarjetas_construcciones += `
            <div class="column">
                <div class="card">
                    <div class="card">
                        <div class="card-content">

                            <p class="title">
                                “${construccion.imagen}”
                            </p>
                            <p class="subtitle">
                                ${construccion.nombre}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        response.write(tarjetas_construcciones);    
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
            console.log(datos_completos);
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const imagen = datos_completos.split('&')[1].split('=')[1];
            console.log(imagen);
            construcciones.push({nombre: nombre, imagen: imagen});
            let tarjetas_construcciones = '';
            for(let construccion of construcciones) {
                tarjetas_construcciones += construccion.nombre + ', ';
                tarjetas_construcciones += construccion.imagen + ';\n';
            }
            filesystem.writeFileSync('hola.txt', tarjetas_construcciones);
            return response.end();
        });

    } else {
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