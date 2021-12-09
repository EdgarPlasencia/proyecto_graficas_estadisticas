//var arr=[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
var salEdinburgh=[];
var salLondon=[];
var salNewYork=[];
var salSanFrancisco=[];
var salSingapore=[];
var salSydney=[];
var salTokyo=[];
var fechas=[];
var info=[];

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
      categories: fechas,
      min:0,
      max:fechas.length,
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


          //CARGAR INFO POR FECHA Y SALARIO
          var fecha=data[i][4];

          var parts =fecha.split('/');
          var f=parts[0]+'-'+parts[1]+'-'+parts[2];
          var mydate = new Date(f); 
          //console.log(f);
          var strSal=data[i][5];
          var floatSal=strSal.slice(1);
          var sal=parseFloat(floatSal.replace(/,/g, ''));
          
          var ciudad=data[i][2];
          //console.log(obj.fecha);

          info.push({sal,mydate,ciudad});

        }

        //console.log(salEdinburgh);

        //ORDENAR LAS FECHAS
        info.sort(function (a, b) {
          return a.mydate - b.mydate;
        });

        //console.log(info);

        /*
        console.log(info[0]);
        console.log(info[1]);
        console.log(info[2]);
        console.log(info[3]);
        console.log(info[4]);
        */
        

        for(var i=0;i<info.length;i++){

          var tempf=info[i].mydate;
          fechas.push(tempf);

            if(data[i][2]=="Edinburgh"){
                //console.log('Edinburgh');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salEdinburgh.push(sal);
            
            }else{
              salEdinburgh.push('');
            }

            if(data[i][2]=="London"){
                //console.log('London');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salLondon.push(sal);
            
            }else{
              salLondon.push('');
            }

            if(data[i][2]=="New York"){
                //console.log('New York');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salNewYork.push(sal);
            
            }else{
              salNewYork.push('');
            }

            if(data[i][2]=="San Francisco"){
                //console.log('San Francisco');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salSanFrancisco.push(sal);
            
            }else{
              salSanFrancisco.push('');   
            }

            if(data[i][2]=="Singapore"){
                //console.log('Singapore');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salSingapore.push(sal);
            
            }else{
              salSingapore.push('');
            }

            if(data[i][2]=="Sydney"){
                //console.log('Sydney');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salSydney.push(sal);
            
            }else{
              salSydney.push('');
            }
            
            if(data[i][2]=="Tokyo"){
                //console.log('Tokyo');

            var strSal=data[i][5];
            var floatSal=strSal.slice(1);
            var sal=parseFloat(floatSal.replace(/,/g, ''));
            salTokyo.push(sal);
            
            }else{
              salTokyo.push('');
            }
            
    }



    var startDate = new Date("2008-01-01");
    var endDate = new Date("2009-01-01");

    var resultProductData = fechas.filter(function(date) { return date >= startDate && date <= endDate });
        // if there is more than 0 results keep it. if 0 then filter it away
      
   
    console.log(resultProductData);
    
    fechas=resultProductData;
    //console.log(fechas);
        
    }


