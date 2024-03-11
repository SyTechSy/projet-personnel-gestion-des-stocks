import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';


import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChartDB } from 'src/app/fack-db/chartData';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexTheme,
  ApexResponsive,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexAnnotations,
} from 'ng-apexcharts';
import ChartRevenuBeneficeComponent from '../chart-revenu-benefice/chart-revenu-benefice.component';
import ChartRetourComponent from '../chart-retour/chart-retour.component';
import ChartTableAccueilComponent from '../chart-table-accueil/chart-table-accueil.component';
import CommandeTableComponent from '../commande-table/commande-table.component';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  theme: ApexTheme;
  responsive: ApexResponsive[];
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  annotations: ApexAnnotations;
};



@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule, 
    SharedModule, 
    NgApexchartsModule, 
    ChartRevenuBeneficeComponent,
    ChartRetourComponent,
    ChartTableAccueilComponent,
    CommandeTableComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export default class AccueilComponent implements OnInit  {
  // constructor

  // constructor() {}

  
  // Properties
  today: Date = new Date();
  AutoDate: string= '';
  AutoDateHeure: string= '';
  pipe = new DatePipe('fr-FR');

  // OnInit Lifecycle Hook
  ngOnInit(): void {
    this.updateDateTime();
    // Mettre à jour la date toutes les secondes
    setInterval(() => {
      this.updateDateTime();
    }, 1000);

    this.intervalSub = setInterval(() => {
      this.getNewSeries(this.lastDate, { min: 10, max: 90 });
    }, 2000);

    this.intervalMain = setInterval(() => {
      this.resetData();
    }, 60000);
  }

  
  // Méthode pour mettre à jour la date actuelle
  updateDateTime(): void {
    this.today = new Date();
    this.AutoDate = this.pipe.transform(this.today, ' EEEE, le dd MMMM yyyy', 'fr') ?? '';
    this.AutoDateHeure = this.pipe.transform(this.today, 'HH:mm:ss') ?? '';
  }


  //////////////////////////// 

   // public props
  // eslint-disable-next-line
  chartDB: any;
  lastDate!: number;
  // eslint-disable-next-line
  data: any;
  intervalSub: string | number | NodeJS.Timer | undefined;
  intervalMain: string | number | NodeJS.Timer | undefined;

  @ViewChild('chart1') chart!: ChartComponent;
  line1CAC!: Partial<ChartOptions>;
  line2CAC!: Partial<ChartOptions>;
  line3CAC: Partial<ChartOptions>;
  area1CAC: Partial<ChartOptions>;
  bar1CAC: Partial<ChartOptions>;
  chartOptions_11: Partial<ChartOptions>;
  bar2CAC: Partial<ChartOptions>;
  bar3CAC: Partial<ChartOptions>;
  bar4CAC: Partial<ChartOptions>;
  mixed1CAC: Partial<ChartOptions>;
  mixed2CAC: Partial<ChartOptions>;
  candlestickCAC: Partial<ChartOptions>;
  bubble1CAC: Partial<ChartOptions>;
  bubble2CAC: Partial<ChartOptions>;
  scatter1CAC: Partial<ChartOptions>;
  scatter2CAC: Partial<ChartOptions>;
  heatMap1CAC: Partial<ChartOptions>;
  heatMap2CAC: Partial<ChartOptions>;
  pie1CAC: Partial<ChartOptions>;
  pie2CAC: Partial<ChartOptions>;
  radialBar1CAC: Partial<ChartOptions>;
  radialBar2CAC: Partial<ChartOptions>;
  radar1CAC: Partial<ChartOptions>;
  radar2CAC: Partial<ChartOptions>;

  // constructor
  constructor() {
    this.chartOptions_11 = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Arts',
          data: [20, 50, 30, 60, 30, 50]
        },
        {
          name: 'Commerce',
          data: [60, 30, 65, 45, 67, 35]
        }
      ],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      colors: ['#73b4ff', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      }
    };




    this.chartDB = ChartDB;
    const {
      line1CAC,
      line3CAC,
      area1CAC,
      bar1CAC,
      chartOptions_11,
      bar2CAC,
      bar3CAC,
      bar4CAC,
      mixed1CAC,
      mixed2CAC,
      candlestickCAC,
      bubble1CAC,
      bubble2CAC,
      scatter1CAC,
      scatter2CAC,
      heatMap1CAC,
      heatMap2CAC,
      pie1CAC,
      pie2CAC,
      radialBar1CAC,
      radialBar2CAC,
      radar1CAC,
      radar2CAC
    } = this.chartDB;

    this.line1CAC = line1CAC;
    this.line3CAC = line3CAC;
    this.area1CAC = area1CAC;
    this.bar1CAC = bar1CAC;
    this.chartOptions_11 = chartOptions_11;
    this.bar2CAC = bar2CAC;
    this.bar3CAC = bar3CAC;
    this.bar4CAC = bar4CAC;
    this.mixed1CAC = mixed1CAC;
    this.mixed2CAC = mixed2CAC;
    this.candlestickCAC = candlestickCAC;
    this.bubble1CAC = bubble1CAC;
    this.bubble2CAC = bubble2CAC;
    this.scatter1CAC = scatter1CAC;
    this.scatter2CAC = scatter2CAC;
    this.heatMap1CAC = heatMap1CAC;
    this.heatMap2CAC = heatMap2CAC;
    this.pie1CAC = pie1CAC;
    this.pie2CAC = pie2CAC;
    this.radialBar1CAC = radialBar1CAC;
    this.radialBar2CAC = radialBar2CAC;
    this.radar1CAC = radar1CAC;
    this.radar2CAC = radar2CAC;

    this.lastDate = 0;
    this.data = [];
    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 });
    this.line2CAC = {
      chart: {
        height: 300,
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [
        {
          data: this.data
        }
      ],
      colors: ['#4680ff'],
      title: {
        text: 'Dynamic Updating Chart',
        align: 'left'
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 777600000
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    };
  }

  // life cycle event
  // ngOnInit() {
  // }

  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
    if (this.intervalMain) {
      clearInterval(this.intervalMain);
    }
  }

  // public method
  getDayWiseTimeSeries(baseval: number, count: number, yrange: { min: number; max: number }) {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      this.data.push({ x, y });
      this.lastDate = baseval;
      baseval += 86400000;
      i++;
    }
  }

  resetData() {
    this.data = this.data.slice(this.data.length - 10, this.data.length);
  }

  getNewSeries(baseval: number, yrange: { min: number; max: number }) {
    const newDate = baseval + 86400000;
    this.lastDate = newDate;
    this.data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
  }
}
