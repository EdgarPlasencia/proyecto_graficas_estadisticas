const { Client } = require('pg');
var express = require('express');

var app = express();

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "test",

})

client.connect();


app.get('/', function(req, res) {
    res.send('RUTA DE INICIO');
});

//mostrar todos los articulos

app.get('/api/articulos', (req, res) => {

    client.query('SELECT * FROM productos', (err, filas) => {
        if (!err) {
            console.log('Consulta exitosa a PG')
                //console.log(res.rows);
            res.send(filas.rows);

        } else {
            console.log(err.message);
        }
        client.end;
    });

});


//variable de entorno
//se utiliza en caso de que el puerto este ocupado
const puerto = 7000;

app.listen(puerto, function() {
    console.log('Servidor OK en puerto:' + puerto);
})