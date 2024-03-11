// import { data } from './series-data';

export class ChartDB {

  // mon chart global line3CAC
  static line3CAC = {
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    colors: ['#0e9e4a', '#FFB64D', '#FF5370'],
    series: [
      {
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: 'Page Views',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    title: {
      text: 'Page Name',
      align: 'left'
    },
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: (val: string) => val + ' (mins)'
          }
        },
        {
          title: {
            formatter: (val: string) => val + ' per session'
          }
        },
        {
          title: {
            formatter: (val: string) => val
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1'
    }
  };
  // fin de mon chart global line3CAC

  // Jai uytiliser ca 
  static pie1CAC = {
    chart: {
      height: 250,
      type: 'pie'
    },
    labels: ['Reavenu Total', 'Bénéfice Total'] ,
    series: [60, 15,],
    colors: [ '#0e9e4a','#4099ff'],
    legend: {
      show: true,
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  // Fin de mon chart Pie one




}
