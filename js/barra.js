//var arr=[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
var salEdinburgh=[];
var salLondon=[];
var salNewYork=[];
var salSanFrancisco=[];
var salSingapore=[];
var salSydney=[];
var salTokyo=[];

inicializarDataTable();

var barras=Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'ESTADISTICAS DE SALARIOS'
    },
    subtitle: {
      text: 'Estadistica por ciudad'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Salario (dolares)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Edinburgh',
      data: salEdinburgh
      //data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  
    }, {
      name: 'London',
      data: salLondon
      //data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  
    }, {
      name: 'New York',
      data: salNewYork
      //data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
  
    }, {
      name: 'San Francisco',
      data: salSanFrancisco
      //data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    },{
        name: 'Singapore',
        data: salSingapore
    },{
        name: 'Sydney',
        data: salSydney
    },{
        name: 'Tokyo',
        data: salTokyo
    }]
  });


  function filtDate(){
    /*
     barras.xAxis[0].update({
        categories:['1','2','3']
     });
     */
    }

    function inicializarDataTable() {
        
        var table = new $('#databasetable').DataTable({
            dom: 'Bfrtip',
            buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        }
        );
        
        var data = table
        .rows()
        .data();
        
        //console.log(data.length);
        var arrSal=[];


        for(var i=0;i<data.length;i++){

            if(data[i][2]=="Edinburgh"){
                //console.log('Edinburgh');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salEdinburgh.push(sal);
            
            }

            if(data[i][2]=="London"){
                //console.log('London');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salLondon.push(sal);
            
            }

            if(data[i][2]=="New York"){
                //console.log('New York');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salNewYork.push(sal);
            
            }

            if(data[i][2]=="San Francisco"){
                //console.log('San Francisco');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salSanFrancisco.push(sal);
            
            }

            if(data[i][2]=="Singapore"){
                //console.log('Singapore');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salSingapore.push(sal);
            
            }

            if(data[i][2]=="Sydney"){
                //console.log('Sydney');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salSydney.push(sal);
            
            }
            
            if(data[i][2]=="Tokyo"){
                //console.log('Tokyo');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salTokyo.push(sal);
            
            }
            

        }
        
        //console.log(salEdinburgh);
    }

