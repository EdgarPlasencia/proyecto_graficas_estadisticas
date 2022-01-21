let datos = document.getElementById("datos");

document.getElementById("btnVerifica").onclick = validar;



function validar()

{
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;
    /*var email1 = document.getElementById("jean@gmail.com").value;	*/


    if (usuario == "jean" && Contraseña == "1234") {
        alert("SE REGSITRIO UN USUARIO NUEVO");

    }
    /*else if(email1 == "jean@gmail.com"){
        alert("SE REGSITRIO UN USUARIO NUEVO");
    }*/
    else {
        alert("COMPROBAR DATOS");

    }
}