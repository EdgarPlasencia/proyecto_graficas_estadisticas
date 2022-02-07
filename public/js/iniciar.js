let datos = document.getElementById("signin").onclick = validar;

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
    .catch(error => console.log('ERROR'));


function validar() {


    var usuario = document.getElementById("usuario").value;
    var passwd = document.getElementById("pass").value;
    /*var email1 = document.getElementById("jean@gmail.com").value;	*/

    if (tablaUsuarios.find(item => item.nombre == usuario)) {

        //Le estas pidiendo que te de el index del usuario que acabas de encontrar
        var index = tablaUsuarios.findIndex(item => item.nombre == usuario);

        //comparas la contraseña de ese usuario
        if (passwd == tablaUsuarios[index].password) {

            alert('DATOS CORRECTOS');

            if (tablaUsuarios[index].tipo == 'admin') {
                location.replace('/adminR');
            } else {
                location.replace('/');
            }
        }
    } else {
        alert('USUARIO O CONTRASEÑA INCORRECTOS');
    }

}