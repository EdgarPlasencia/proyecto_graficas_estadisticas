    var url = "js/consecionario.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    console.log('carga de datos');
    oReq.onload = function(e) {

        var info = readData();
        console.log(info);

        function readData() {

            var arraybuffer = oReq.response;

            /* convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");

            /* Call XLSX */
            var workbook = XLSX.read(bstr, { type: "binary" });

            /* DO SOMETHING WITH workbook HERE */
            var first_sheet_name = workbook.SheetNames[0];
            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];

            var info = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            return info;

        }

        //AHORA QUE TENEMOS EL ARCHIVO EXCEL CONVERTIDO A LA VARIABLE INFO, GENERAMOS LAS TABLAS


        var contenido = document.getElementById("registros");

        for (var i = 0; i < info.length; i++) {
            var fila = document.createElement('tr');
            var codigo = document.createElement('td');
            codigo.textContent = info[i].Codigo;

            var tipo = document.createElement('td');
            tipo.textContent = info[i].Tipo;

            var marca = document.createElement('td');
            marca.textContent = info[i].Marca;

            var modelo = document.createElement('td');
            modelo.textContent = info[i].Modelo;

            var fecha = document.createElement('td');
            fecha.textContent = info[i].Fecha;

            var costo = document.createElement('td');
            costo.textContent = info[i].Costo;

            contenido.appendChild(fila);
            fila.appendChild(codigo);
            fila.appendChild(tipo);
            fila.appendChild(marca);
            fila.appendChild(modelo);
            fila.appendChild(fecha);
            fila.appendChild(costo);
        }
    }

    oReq.send();