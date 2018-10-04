//                                                          //Al ejecutarse registra los helpers dentro de 'hbs'.

const hbs = require('hbs');


//                                                          //Helper es una fucnión que se dispara cuando el template lo
//                                                          //      lo requiere. Cuando un parcial no recibe la variable
//                                                          //      que necesita, la busca en los helpers.
hbs.registerHelper('getAnio', () => {
    //                                                      //El año se ocupa en el footer.
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});