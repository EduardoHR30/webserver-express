const http = require('http');

//                                                          //Crea un servidor recibiendo un callback.
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Eduardo',
            edad: 24,
            url: req.url
        };

        //                                                  //Respuesta que se envia.    
        //res.write('Hola Mundo');
        res.write(JSON.stringify(salida));
        //                                                  //Es necesario indicar que ya se creó la respuesta.
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');