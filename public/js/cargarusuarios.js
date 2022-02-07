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


        nombre.textContent = tablaUsuarios[i].nombre;
        correo.textContent = tablaUsuarios[i].correo;
        tipo.textContent = tablaUsuarios[i].tipo;

        cuerpo.appendChild(fila);

        fila.appendChild(nombre);
        fila.appendChild(correo);
        fila.appendChild(tipo);

    }
}