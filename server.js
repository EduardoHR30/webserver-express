const express = require('express');
const app = express();
const hbs = require('hbs');

//                                                          //Solo se ejecuta 'helpers.js'.
require('./hbs/helpers');

const port = process.env.PORT || 3000;
//                                                          //Para que Heroku funcione debe agregarse la siguiente
//                                                          //      línea dentro de "scripts" en el archivo package.json
//                                                          //      ["start": "node server.js",]

//                                                          //Middleware es callback que se ejecuta con cualquier URL.
app.use(express.static(__dirname + '/public'));

/*Express HBS engine*/
//                                                          //Los parciales son bloques de código HTML que se pueden
//                                                          //      reutilizar.

//                                                          //Crea un folder que contenga los parciales. 
hbs.registerPartials(__dirname + '/views/partials');
//                                                          //Para usar hbs engine para renderizar las páginas.
app.set('view engine', 'hbs');

//                                                          //Configuración de solicitud 'get' cuando el path es un '/'.
app.get('/', (req, res) => {
    //                                                      //[send] analiza si es necesario convertirlo en JSON.
    //res.send('Hola Mundo')

    //                                                      //Le indicamos que archivo renderizar.
    res.render('home', {
        nombre: 'eduardo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// //                                                          //Se debe crear un servicio por cada
// app.get('/data', (req, res) => {
//     res.send('Hola Data')
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});