var table = new $('#databasetable').DataTable({
    dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ]
});

var container = $('<div/>').insertBefore(table.table().container());

var chart = Highcharts.chart(container[0], {
    chart: {
        type: 'line',
    },
    title: {
        text: 'Registro consecionario',
    },
    series: [{
        data: chartData(table),
    }, ],
});


// On each draw, update the data in the chart
table.on('draw', function() {
    chart.series[0].setData(chartData(table));
});

//funcion chartData
function chartData(table) {
    var filasAfectadas = {};
    // Contamos el número de entradas para cada puesto (Puesto) 
    // columna 1 = [0=nombre, 1=puesto, 2=pais]
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

        console.log(filasAfectadas); //nos muestra la cantidad filas seleccionadas
        //console.log("clave: "+clave+" cantidad: "+cantidad);
        return {
            name: clave,
            y: cantidad,
        };

    });
}