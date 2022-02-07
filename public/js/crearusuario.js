 document.getElementById("btnVerifica").onclick = crearUsuarios;

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


 function crearUsuarios() {

     var nombre = document.getElementById('usuario').value;
     var correo = document.getElementById('email').value;
     var passwd = document.getElementById('pass').value;
     var passwd2 = document.getElementById('pass2').value;
     var temptipo = document.getElementById('opciones-categoria').value;
     var tipo = "user";
     if (temptipo == '1') {
         tipo = "admin";
     } else if (temptipo == '2') {
         tipo = "user";
     }


     const expression = /\S+@\S+/;


     if (tablaUsuarios.find(item => item.correo == correo)) {
         alert('Ya existe un usuario registrado con ese correo');
     } else if (passwd != passwd2) {
         alert('Las contraseñas no coinciden');
     } else if (expression.test(String(correo).toLowerCase()) == false) {
         alert('Correo no valido');
     } else {
         fetch('http://localhost:7000/api/usuarios', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
                     nombre: nombre,
                     correo: correo,
                     password: passwd,
                     tipo: tipo
                 })
             }).then(res => {
                 return res.json()
             })
             .catch(error => console.log('ERROR'));

         alert('USUARIO CREADO CORRECTAMENTE');

         location.reload();
     }

 }