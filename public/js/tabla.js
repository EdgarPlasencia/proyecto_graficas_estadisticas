document.getElementById("lista-tablas").onchange = cambiar;

var url = 'http://localhost:7000/api/tablaspg/personal';

var table = new $('#databasetable').DataTable({

    "ajax": {
        "url": url,
        "dataSrc": ""
    },
    "columns": [
        { "data": "pk_personal_sec" },
        { "data": "total_hombres" },
        { "data": "total_mujeres" },
        { "data": "total_sueldo_noviembre_hombres" },
        { "data": "total_sueldo_noviembre_mujeres" },
    ],
    "columnDefs": [{
        "targets": [2],
        render(v) {
            return Number(v).toFixed(2)
        }
    }],
    dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ]
});

////////////////
var container = $('<div/>').insertBefore(table.table().container());

var chart = Highcharts.chart(container[0], {
    chart: {
        type: 'column',
    },
    title: {
        text: 'Tabla personal',
    },
    series: [{
        data: chartData(table),
    }, ],
});

$.each(['line', 'column', 'area', 'scatter', 'pie'], function(i, type) {
    $('#' + type).click(function() {
        chart.series[0].update({
            type: type
        });
    });
});


// On each draw, update the data in the chart
table.on('draw', function() {
    chart.series[0].setData(chartData(table));
});

//funcion chartData
function chartData(table) {
    var filasAfectadas = {};
    // Contamos el número de entradas para cada puesto (Puesto) 
    table.column(1, { search: 'applied' }).data().each(function(val) {
        if (filasAfectadas[val]) {
            filasAfectadas[val] += 1;
        } else {
            filasAfectadas[val] = 1;
        }
    });


    // Y mapeamos al formato que usa highcharts
    //usamos la funcion $map de jquery 
    //$.map(array, function(value, index){});

    return $.map(filasAfectadas, function(cantidad, clave) {

        //console.log(filasAfectadas);
        return {
            name: clave,
            y: cantidad,
        };

    });
}

function cambiar() {
    index = document.getElementById("lista-tablas").value;

    var tablaUsuarios;
    if (index == '1') {

        fetch('http://localhost:7000/api/tablaspg/personal')
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

        chart.setTitle({ text: "Tabla empresas" });

        $('#databasetable').DataTable().clear();
        $('#databasetable').DataTable().destroy();


        var url = 'http://localhost:7000/api/tablaspg/personal';

        var table = new $('#databasetable').DataTable({

            "ajax": {
                "url": url,
                "dataSrc": ""
            },
            "columns": [
                { "data": "pk_personal_sec" },
                { "data": "total_hombres" },
                { "data": "total_mujeres" },
                { "data": "total_sueldo_noviembre_hombres" },
                { "data": "total_sueldo_noviembre_mujeres" },
            ],
            "columnDefs": [{
                "targets": [2],
                render(v) {
                    return Number(v).toFixed(2)
                }
            }],
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

        table.on('draw', function() {
            chart.series[0].setData(chartData(table));
        });

        chart.series[0].setData(table);
        chart.redraw();

    } else if (index == '2') {

        document.getElementById('cod_2_h').textContent = 'NUMERO EMPRESAS';
        document.getElementById('cod_3_h').textContent = 'REMUNERACIONES';
        document.getElementById('cod_4_h').textContent = 'DEPRECIACIONES';
        document.getElementById('cod_5_h').textContent = 'VALOR AGREGADO';

        document.getElementById('cod_2_f').textContent = 'NUMERO EMPRESAS';
        document.getElementById('cod_3_f').textContent = 'REMUNERACIONES';
        document.getElementById('cod_4_f').textContent = 'DEPRECIACIONES';
        document.getElementById('cod_5_f').textContent = 'VALOR AGREGADO';

        fetch('http://localhost:7000/api/tablaspg/empresas')
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

        chart.setTitle({ text: "Tabla empresas" });

        $('#databasetable').DataTable().clear();
        $('#databasetable').DataTable().destroy();


        var url = 'http://localhost:7000/api/tablaspg/empresas';

        var table = new $('#databasetable').DataTable({

            "ajax": {
                "url": url,
                "dataSrc": ""
            },
            "columns": [
                { "data": "pk_empresas_sec" },
                { "data": "numero_empresas" },
                { "data": "remuneraciones" },
                { "data": "depreciaciones" },
                { "data": "valor_agregado" },
            ],
            "columnDefs": [{
                "targets": [2],
                render(v) {
                    return Number(v).toFixed(2)
                }
            }],
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

        table.on('draw', function() {
            chart.series[0].setData(chartData(table));
        });

        chart.series[0].setData(table);
        chart.redraw();

    } else if (index == '3') {


        document.getElementById('cod_2_h').textContent = 'PRODUCCION TOTAL';
        document.getElementById('cod_3_h').textContent = 'V BIENES PROD';
        document.getElementById('cod_4_h').textContent = 'V BIENES COM';
        document.getElementById('cod_5_h').textContent = 'V NETAS SERVICIOS';

        document.getElementById('cod_2_f').textContent = 'PRODUCCION TOTAL';
        document.getElementById('cod_3_f').textContent = 'V BIENES PROD';
        document.getElementById('cod_4_f').textContent = 'V BIENES COM';
        document.getElementById('cod_5_f').textContent = 'V NETAS SERVICIOS';


        fetch('http://localhost:7000/api/tablaspg/produccion')
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

        chart.setTitle({ text: "Tabla produccion" });

        $('#databasetable').DataTable().clear();
        $('#databasetable').DataTable().destroy();


        var url = 'http://localhost:7000/api/tablaspg/produccion';

        var table = new $('#databasetable').DataTable({

            "ajax": {
                "url": url,
                "dataSrc": ""
            },
            "columns": [
                { "data": "pk_produccion_sec" },
                { "data": "produccion_total" },
                { "data": "ventas_netas_de_bienes_producidos" },
                { "data": "venta_de_bienes_comercializados" },
                { "data": "ventas_netas_de_servicios" },
            ],
            "columnDefs": [{
                "targets": [2],
                render(v) {
                    return Number(v).toFixed(2)
                }
            }],
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

        table.on('draw', function() {
            chart.series[0].setData(chartData(table));
        });

        chart.series[0].setData(table);
        chart.redraw();


    } else if (index == '4') {

        document.getElementById('cod_2_h').textContent = 'GASTOS REMUNERACIONES';
        document.getElementById('cod_3_h').textContent = 'TOTAL GASTOS';
        document.getElementById('cod_4_h').textContent = 'OTRAS REMUNERACIONES';
        document.getElementById('cod_5_h').textContent = 'VALIDEZ';

        document.getElementById('cod_2_f').textContent = 'GASTOS REMUNERACIONES';
        document.getElementById('cod_3_f').textContent = 'TOTAL GASTOS';
        document.getElementById('cod_4_f').textContent = 'OTRAS REMUNERACIONES';
        document.getElementById('cod_5_f').textContent = 'VALIDEZ';

        fetch('http://localhost:7000/api/tablaspg/remuneraciones')
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

        chart.setTitle({ text: "Tabla remuneraciones" });

        $('#databasetable').DataTable().clear();
        $('#databasetable').DataTable().destroy();


        var url = 'http://localhost:7000/api/tablaspg/remuneraciones';

        var table = new $('#databasetable').DataTable({

            "ajax": {
                "url": url,
                "dataSrc": ""
            },
            "columns": [
                { "data": "pk_remuneraciones_sec" },
                { "data": "total_gasto_sueldos_remuneraciones_iess" },
                { "data": "total_gasto_beneficiossociales_indemnizaciones_remuneraciones_i" },
                { "data": "otras_remuneraciones" },
                { "data": "valido_hasta" },
            ],
            "columnDefs": [{
                "targets": [2],
                render(v) {
                    return Number(v).toFixed(2)
                }
            }],
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

        table.on('draw', function() {
            chart.series[0].setData(chartData(table));
        });

        chart.series[0].setData(table);
        chart.redraw();

    }


}