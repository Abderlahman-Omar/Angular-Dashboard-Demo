import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
} from 'ng-apexcharts';
@Component({
  selector: 'app-line-area',
  templateUrl: './line-area.component.html',
  styleUrl: './line-area.component.css',
})
export class LineAreaComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  yaxis!: ApexYAxis | ApexYAxis[];
  labels!: string[];
  stroke!: ApexStroke;
  markers!: ApexMarkers;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    (this.series = [
      {
        name: 'استخدام',
        type: 'area',
        data: [24, 35, 11, 27, 11, 23, 6, 21, 11, 27, 13, 17],
        color: '#baaef6',
      },
    ]),
      (this.chart = {
        height: 260,
        type: 'line',
      }),
      (this.stroke = {
        curve: 'smooth',
      }),
      (this.fill = {
        type: 'solid',
        opacity: [0.35, 1],
      }),
      (this.labels = [
        'ديسمبر',
        'نوفمبر',
        'اكتوبر',
        'سبتمبر',
        'اغسطس',
        'يوليو',
        'يونيو',
        'مايو',
        'ابريل',
        'مارس ',
        'فبرابر',
        'يناير',
      ]),
      (this.markers = {
        size: 0,
      }),
      (this.yaxis = [
        {
          title: {
            text: 'Series A',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Series B',
          },
        },
      ]),
      (this.xaxis = {
        labels: {
          trim: false,
        },
      }),
      (this.tooltip = {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' points';
            }
            return y;
          },
        },
      });
  }
  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
