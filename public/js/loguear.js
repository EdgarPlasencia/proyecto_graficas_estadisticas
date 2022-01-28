document.getElementById("singin").onclick = validar;
document.getElementById("reg").onclick = registrar;

function validar()

{
    var usuario = document.getElementById("usuarioad").value;
    var Contraseña = document.getElementById("passad").value;

    if (usuario == "jean" && Contraseña == "1234") {
        alert("INGRESO EXITOSO");

        window.location.replace("http://localhost/proyecto_graficas_estadisticas-main/adminR.html");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");

    }

}

function registrar() {
    alert("REGISTRO EXITOSO");
}