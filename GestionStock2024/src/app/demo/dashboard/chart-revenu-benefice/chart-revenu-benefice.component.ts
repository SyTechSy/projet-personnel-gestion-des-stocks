import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexNonAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexStroke,
//   ApexYAxis,
//   ApexLegend,
//   ApexFill,
//   ApexGrid,
//   ApexPlotOptions,
//   ApexTooltip,
//   ApexMarkers
// } from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexAxisChartSeries | ApexNonAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   yaxis: ApexYAxis;
//   tooltip: ApexTooltip;
//   labels: string[];
//   colors: string[];
//   legend: ApexLegend;
//   fill: ApexFill;
//   grid: ApexGrid;
//   markers: ApexMarkers;
// };

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-chart-revenu-benefice',
  standalone:  true,
  imports: [CommonModule, SharedModule, NgApexchartsModule,],
  templateUrl: './chart-revenu-benefice.component.html',
  styleUrls: ['./chart-revenu-benefice.component.scss']
})
export default class ChartRevenuBeneficeComponent { // public props
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  // constructor
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Revenu total",
          data: [31, 40, 28, 51, 42, 50, 45]
        },
        {
          name: "Bénéfice total",
          data: [11, 32, 45, 32, 34, 12, 15]
        }
      ],
      chart: {
        height: 240,
        type: "area",
        toolbar: {  // Définir toolbar sur false pour supprimer les icônes de zoom et de menu
          show: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  // public generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  //     var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

  //     series.push([x, y, z]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }
}
