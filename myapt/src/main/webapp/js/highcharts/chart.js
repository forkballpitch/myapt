



//Highcharts.chart('containerseoul', {
$('#containerseoul').highcharts({
    data: {
        googleSpreadsheetKey: '1kBTlD5aLoX-l8wW6RaDRD7rf0o0M8kU-6apyBvr5MOc',
           startColumn: 0,
          endColumn: 4,
          startRow: 0,
          googleSpreadsheetWorksheet: 1
    },
    title: {
        text: '서울 아파트 시세비교 단위:1㎡,만원'
    }
});


$('#containergyeonggi').highcharts({
    data: {
          googleSpreadsheetKey: '1kBTlD5aLoX-l8wW6RaDRD7rf0o0M8kU-6apyBvr5MOc',
          startColumn: 0,
          endColumn: 4,
          startRow: 0,
          googleSpreadsheetWorksheet: 2
    },
    title: {
        text: '경기 아파트 시세비교 단위:1㎡,만원'
    }
});



//
//
//Highcharts.chart('container', {
//    chart: {
//        type: 'column'
//    },
//    title: {
//        text: 'Efficiency Optimization by Branch'
//    },
//    xAxis: {
//        categories: [
//            'Seattle HQ',
//            'San Francisco',
//            'Tokyo'
//        ]
//    },
//    yAxis: [{
//        min: 0,
//        title: {
//            text: 'Employees'
//        }
//    }, {
//        title: {
//            text: 'Profit (millions)'
//        },
//        opposite: true
//    }],
//    legend: {
//        shadow: false
//    },
//    tooltip: {
//        shared: true
//    },
//    plotOptions: {
//        column: {
//            grouping: false,
//            shadow: false,
//            borderWidth: 0
//        }
//    },
//    series: [{
//        name: 'Employees',
//        color: 'rgba(165,170,217,1)',
//        data: [150, 73, 20],
//        pointPadding: 0.3,
//        pointPlacement: -0.2
//    }, {
//        name: 'Employees Optimized',
//        color: 'rgba(126,86,134,.9)',
//        data: [140, 90, 40],
//        pointPadding: 0.4,
//        pointPlacement: -0.2
//    }, {
//        name: 'Profit',
//        color: 'rgba(248,161,63,1)',
//        data: [183.6, 178.8, 198.5],
//        tooltip: {
//            valuePrefix: '$',
//            valueSuffix: ' M'
//        },
//        pointPadding: 0.3,
//        pointPlacement: 0.2,
//        yAxis: 1
//    }, {
//        name: 'Profit Optimized',
//        color: 'rgba(186,60,61,.9)',
//        data: [203.6, 198.8, 208.5],
//        tooltip: {
//            valuePrefix: '$',
//            valueSuffix: ' M'
//        },
//        pointPadding: 0.4,
//        pointPlacement: 0.2,
//        yAxis: 1
//    }]
//});
////
////
////Highcharts.chart('container2', {
////    data: {
////        table: 'datatable2'
////    },
////    chart: {
////        type: 'column'
////    },
////    title: {
////        text: 'Data extracted from a HTML table in the page'
////    },
////    yAxis: {
////        allowDecimals: false,
////        title: {
////            text: 'Units'
////        }
////    },
////    tooltip: {
////        formatter: function () {
////            return '<b>' + this.series.name + '</b><br/>' +
////                this.point.y + ' ' + this.point.name.toLowerCase();
////        }
////    }
////});
//
//
//
////////////////3번째
//
//
//var colors = Highcharts.getOptions().colors,
//    categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
//    data = [{
//        y: 56.33,
//        color: colors[0],
//        drilldown: {
//            name: 'MSIE versions',
//            categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0',
//                'MSIE 10.0', 'MSIE 11.0'],
//            data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
//            color: colors[0]
//        }
//    }, {
//        y: 10.38,
//        color: colors[1],
//        drilldown: {
//            name: 'Firefox versions',
//            categories: ['Firefox v31', 'Firefox v32', 'Firefox v33',
//                'Firefox v35', 'Firefox v36', 'Firefox v37', 'Firefox v38'],
//            data: [0.33, 0.15, 0.22, 1.27, 2.76, 2.32, 2.31, 1.02],
//            color: colors[1]
//        }
//    }, {
//        y: 24.03,
//        color: colors[2],
//        drilldown: {
//            name: 'Chrome versions',
//            categories: ['Chrome v30.0', 'Chrome v31.0', 'Chrome v32.0',
//                'Chrome v33.0', 'Chrome v34.0',
//                'Chrome v35.0', 'Chrome v36.0', 'Chrome v37.0', 'Chrome v38.0',
//                'Chrome v39.0', 'Chrome v40.0', 'Chrome v41.0', 'Chrome v42.0',
//                'Chrome v43.0'],
//            data: [0.14, 1.24, 0.55, 0.19, 0.14, 0.85, 2.53, 0.38, 0.6, 2.96,
//                5, 4.32, 3.68, 1.45],
//            color: colors[2]
//        }
//    }, {
//        y: 4.77,
//        color: colors[3],
//        drilldown: {
//            name: 'Safari versions',
//            categories: ['Safari v5.0', 'Safari v5.1', 'Safari v6.1',
//                'Safari v6.2', 'Safari v7.0', 'Safari v7.1', 'Safari v8.0'],
//            data: [0.3, 0.42, 0.29, 0.17, 0.26, 0.77, 2.56],
//            color: colors[3]
//        }
//    }, {
//        y: 0.91,
//        color: colors[4],
//        drilldown: {
//            name: 'Opera versions',
//            categories: ['Opera v12.x', 'Opera v27', 'Opera v28', 'Opera v29'],
//            data: [0.34, 0.17, 0.24, 0.16],
//            color: colors[4]
//        }
//    }, {
//        y: 0.2,
//        color: colors[5],
//        drilldown: {
//            name: 'Proprietary or Undetectable',
//            categories: [],
//            data: [],
//            color: colors[5]
//        }
//    }],
//    browserData = [],
//    versionsData = [],
//    i,
//    j,
//    dataLen = data.length,
//    drillDataLen,
//    brightness;
//
//
//// Build the data arrays
//for (i = 0; i < dataLen; i += 1) {
//
//    // add browser data
//    browserData.push({
//        name: categories[i],
//        y: data[i].y,
//        color: data[i].color
//    });
//
//    // add version data
//    drillDataLen = data[i].drilldown.data.length;
//    for (j = 0; j < drillDataLen; j += 1) {
//        brightness = 0.2 - (j / drillDataLen) / 5;
//        versionsData.push({
//            name: data[i].drilldown.categories[j],
//            y: data[i].drilldown.data[j],
//            color: Highcharts.Color(data[i].color).brighten(brightness).get()
//        });
//    }
//}
//
//// Create the chart
//Highcharts.chart('container3', {
//    chart: {
//        type: 'pie'
//    },
//    title: {
//        text: 'Browser market share, January, 2015 to May, 2015'
//    },
//    subtitle: {
//        text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
//    },
//    yAxis: {
//        title: {
//            text: 'Total percent market share'
//        }
//    },
//    plotOptions: {
//        pie: {
//            shadow: false,
//            center: ['50%', '50%']
//        }
//    },
//    tooltip: {
//        valueSuffix: '%'
//    },
//    series: [{
//        name: 'Browsers',
//        data: browserData,
//        size: '60%',
//        dataLabels: {
//            formatter: function () {
//                return this.y > 5 ? this.point.name : null;
//            },
//            color: '#ffffff',
//            distance: -30
//        }
//    }, {
//        name: 'Versions',
//        data: versionsData,
//        size: '80%',
//        innerSize: '60%',
//        dataLabels: {
//            formatter: function () {
//                // display only if larger than 1
//                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
//                    this.y + '%' : null;
//            }
//        },
//        id: 'versions'
//    }],
//    responsive: {
//        rules: [{
//            condition: {
//                maxWidth: 400
//            },
//            chartOptions: {
//                series: [{
//                    id: 'versions',
//                    dataLabels: {
//                        enabled: false
//                    }
//                }]
//            }
//        }]
//    }
//});
//
//
////////////4
//
//
//Highcharts.chart('container4', {
//    title: {
//        text: 'Combination chart'
//    },
//    xAxis: {
//        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
//    },
//    labels: {
//        items: [{
//            html: 'Total fruit consumption',
//            style: {
//                left: '50px',
//                top: '18px',
//                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
//            }
//        }]
//    },
//    series: [{
//        type: 'column',
//        name: 'Jane',
//        data: [3, 2, 1, 3, 4]
//    }, {
//        type: 'column',
//        name: 'John',
//        data: [2, 3, 5, 7, 6]
//    }, {
//        type: 'column',
//        name: 'Joe',
//        data: [4, 3, 3, 9, 0]
//    }, {
//        type: 'spline',
//        name: 'Average',
//        data: [3, 2.67, 3, 6.33, 3.33],
//        marker: {
//            lineWidth: 2,
//            lineColor: Highcharts.getOptions().colors[3],
//            fillColor: 'white'
//        }
//    }, {
//        type: 'pie',
//        name: 'Total consumption',
//        data: [{
//            name: 'Jane',
//            y: 13,
//            color: Highcharts.getOptions().colors[0] // Jane's color
//        }, {
//            name: 'John',
//            y: 23,
//            color: Highcharts.getOptions().colors[1] // John's color
//        }, {
//            name: 'Joe',
//            y: 19,
//            color: Highcharts.getOptions().colors[2] // Joe's color
//        }],
//        center: [100, 80],
//        size: 100,
//        showInLegend: false,
//        dataLabels: {
//            enabled: false
//        }
//    }]
//});
//
//
///////monthly
//
//Highcharts.chart('containermonthly', {
//    chart: {
//        type: 'column'
//    },
//    title: {
//        text: 'Monthly Average Rainfall'
//    },
//    subtitle: {
//        text: 'Source: WorldClimate.com'
//    },
//    xAxis: {
//        categories: [
//            'Jan',
//            'Feb',
//            'Mar',
//            'Apr',
//            'May',
//            'Jun',
//            'Jul',
//            'Aug',
//            'Sep',
//            'Oct',
//            'Nov',
//            'Dec'
//        ],
//        crosshair: true
//    },
//    yAxis: {
//        min: 0,
//        title: {
//            text: 'Rainfall (mm)'
//        }
//    },
//    tooltip: {
//        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//        footerFormat: '</table>',
//        shared: true,
//        useHTML: true
//    },
//    plotOptions: {
//        column: {
//            pointPadding: 0.2,
//            borderWidth: 0
//        }
//    },
//    series: [{
//        name: '강남구',
//        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//
//    }, {
//        name: '강동구',
//        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
//
//    }, {
//        name: '강북구',
//        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
//
//    }, {
//        name: '강서구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '관악구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '광진구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '구로구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '금천구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '노원구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '도봉구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '동대문구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '동작구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }
//    ,{
//        name: '마포구',
//        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//    }]
//});
//
//
////////////////line
//
//Highcharts.chart('containerline', {
//
//    title: {
//        text: 'Solar Employment Growth by Sector, 2010-2016'
//    },
//
//    subtitle: {
//        text: 'Source: thesolarfoundation.com'
//    },
//
//    yAxis: {
//        title: {
//            text: 'Number of Employees'
//        }
//    },
//    legend: {
//        layout: 'vertical',
//        align: 'right',
//        verticalAlign: 'middle'
//    },
//
//    plotOptions: {
//        series: {
//            pointStart: 2010
//        }
//
//    },
//    
//
//
//    series: [{
//        name: '강남구',
//        color: 'red',
//        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
//    }, {
//        name: '강동구',
//        color: 'orange',
//        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
//    }, {
//        name: '강북구',
//        color: 'yellow',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }
//    , {
//        name: '강서구',
//        color: 'green',
//        data: [10644, 18722, 15005, 18771, 21185, 23377, 32047, 38387]
//    }, {
//        name: '관악구',
//        color: 'blue',
//        data: [10744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '광진구',
//        color: 'purple',
//        data: [11844, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '구로구',
//        data: [21544, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '금천구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '노원구',
//        data: [61744, 87722, 96005, 89771, 100185, 124377, 132147, 139387]
//    }, {
//        name: '도봉구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '동대문구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '동작구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '마포구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '서대문구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '서초구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '성동구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '성북구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '송파구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '양천구',
//        data: [31744, 57722, 96005, 59771, 60185, 74377, 82147, 69387]
//    }, {
//        name: '영등포구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '용산구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '은평구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '종로구',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: '중구',
//        data: [12744, 16722, 15005, 18771, 22185, 25377, 33147, 38387]
//    }
//    
//    , {
//        name: '중랑구',
//        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//    }]
//
//});





///////////////seoul line chart

//Highcharts.chart('containerseoul', {
//    data: {
//          googleSpreadsheetKey: '1kBTlD5aLoX-l8wW6RaDRD7rf0o0M8kU-6apyBvr5MOc',
//          startColumn: 0,
//          endColumn: 4,
//          startRow: 0,
//          googleSpreadsheetWorksheet: 1
//    },
//    title: {
//        text: 'Data from a Google spreadsheet'
//    }
//
//});

