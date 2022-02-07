const { Client } = require('pg');
var express = require('express');
var bodyparser = require('body-parser');
//var bcrypt = require('bcrypt');
var app = express();


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//CONEXION CON BASE DE DATOS INEC

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "dbinec",

})


//CONECTAMOS
client.connect();


//RUTA DE INICIO POR DEFECTO
app.get('/', function(req, res) {
    res.send('RUTA DE INICIO');
});

//mostrar las consultas de la tabla INEC DEVUELVE UN JSON

app.get('/api/tablaspg/personal', (req, res) => {

    client.query('SELECT pk_personal_sec,total_hombres,total_mujeres,total_sueldo_noviembre_hombres,total_sueldo_noviembre_mujeres FROM dim_personal_sec', (err, filas) => {
        if (!err) {
            console.log('Consulta exitosa a PG');
            res.send(filas.rows);

        } else {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            console.log(err.message);

        }
        client.end;
    });

});
///////////////////////////////////////////////////////////////
app.get('/api/tablaspg/empresas', (req, res) => {

    client.query('SELECT pk_empresas_sec,numero_empresas,remuneraciones,depreciaciones,valor_agregado FROM dim_empresas_sec', (err, filas) => {
        if (!err) {
            console.log('Consulta exitosa a PG')
                //console.log(res.rows);
            res.send(filas.rows);

        } else {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            console.log(err.message);
        }
        client.end;
    });

});
///////////////////////////////////////////////////////////////
app.get('/api/tablaspg/produccion', (req, res) => {

    client.query('SELECT pk_produccion_sec,produccion_total,ventas_netas_de_bienes_producidos,venta_de_bienes_comercializados,ventas_netas_de_servicios FROM dim_produccion_sec', (err, filas) => {
        if (!err) {
            console.log('Consulta exitosa a PG')
                //console.log(res.rows);
            res.send(filas.rows);

        } else {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            console.log(err.message);
        }
        client.end;
    });

});
///////////////////////////////////////////////////////////////
app.get('/api/tablaspg/remuneraciones', (req, res) => {

    client.query('SELECT pk_remuneraciones_sec,total_gasto_sueldos_remuneraciones_iess,total_gasto_beneficiossociales_indemnizaciones_remuneraciones_i,otras_remuneraciones,valido_hasta FROM dim_remuneraciones_sec', (err, filas) => {
        if (!err) {
            console.log('Consulta exitosa a PG')
                //console.log(res.rows);
            res.send(filas.rows);

        } else {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            console.log(err.message);
        }
        client.end;
    });

});
//CONEXION CON LA TABLA DE USUARIOS

const users = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "usuarios",

})

users.connect();

//mostrar todos los usuarios
//CONSULTA DEVUELVE JSON CON TODOS LOS USUARIOS
app.get('/api/usuarios', (req, res) => {

    users.query('SELECT * FROM registro', (err, filas) => {
        if (!err) {
            console.log('Consulta exitosa a los usuarios en PG')
            res.send(filas.rows);

        } else {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            console.log(err.message);
        }
        users.end;
    });

});
//////////////////////////////////////////////////////


//ingresar nuevo usuario
//ENVIA MEDIANTE EL BODY UN JSON Y LO DESCOMPONEMOS PARA GENERAR EL SQL
app.post('/api/usuarios', (req, res) => {
    var nombre = req.body.nombre;
    var correo = req.body.correo;
    //var password = bcrypt.hashSync(req.body.password, 10);
    var password = req.body.password;
    var tipo = req.body.tipo;
    console.log("nombre: ", nombre);
    console.log("correo: ", correo);
    console.log("passwd: ", password);
    console.log("tipo: ", tipo);


    let sql = "INSERT INTO registro(nombre,correo,password,tipo) VALUES (text('" + nombre + "'),text('" + correo + "'),text('" + password + "'),text('" + tipo + "'))";

    users.query(sql, function(error, results) {
        if (error) {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            throw error;
        } else {
            console.log('USUARIO CREADO CORRECTAMENTE');
            res.send(results);
        }
    });
});
////////////////////////////////////////////////////////////

//PARA ELIMINAR USUARIOS

app.delete('/api/usuarios', (req, res) => {

    var correo = req.body.correo;

    let sql = "DELETE FROM registro WHERE correo='" + correo + "'";

    users.query(sql, function(error, results) {
        if (error) {
            alert('ERROR AL CONECTAR CON LA BASE DE DATOS');
            throw error;
        } else {
            console.log('USUARIO ELIMINADO CORRECTAMENTE');
            res.send(results);
        }
    });
});

//variable de entorno
//se utiliza en caso de que el puerto este ocupado
const puerto = 7000;

app.listen(puerto, function() {
    console.log('Servidor OK en puerto:' + puerto);
})