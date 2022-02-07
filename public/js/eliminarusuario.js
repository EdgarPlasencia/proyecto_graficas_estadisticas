var tablaUsuarios;

fetch('http://localhost:7000/api/usuarios')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
            return res.json()
        } else {
            console.log('NOT SUCCESSFUL')
        }
    })
    .then(data => tablaUsuarios = data)
    .then(cargarUsuarios)
    .catch(error => console.log('ERROR'));


function cargarUsuarios() {

    var cuerpo = document.getElementById('registro');


    var num = tablaUsuarios.length;

    for (var i = 0; i < num; i++) {
        var fila = document.createElement('tr');

        var nombre = document.createElement('td');

        var correo = document.createElement('td');

        var tipo = document.createElement('td');

        var opciones = document.createElement('td');

        var conf = document.createElement('img');

        var elim = document.createElement('img');


        nombre.textContent = tablaUsuarios[i].nombre;
        correo.textContent = tablaUsuarios[i].correo;
        tipo.textContent = tablaUsuarios[i].tipo;

        conf.src = "img/icons/llave.png";


        elim.src = "img/icons/borrar.png";
        elim.id = i;
        elim.onclick = borrar;


        cuerpo.appendChild(fila);

        fila.appendChild(nombre);
        fila.appendChild(correo);
        fila.appendChild(tipo);
        fila.appendChild(opciones);
        if (tablaUsuarios[i].tipo == 'admin') {

            //opciones.appendChild(conf);
        } else if (tablaUsuarios[i].tipo == 'user') {

            //opciones.appendChild(conf);
            opciones.appendChild(elim);
        }

    }
}

function borrar() {
    var index = this.id;
    //console.log(tablaUsuarios[index].correo);

    var correo = tablaUsuarios[index].correo;
    fetch('http://localhost:7000/api/usuarios', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                correo: correo

            })
        }).then(res => {

            return res.json()
        })
        .catch(error => console.log('ERROR'))

    alert('USUARIO ELIMINADO CORRECTAMENTE');

    location.reload();
}