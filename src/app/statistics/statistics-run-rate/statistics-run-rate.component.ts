import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics-run-rate',
  templateUrl: './statistics-run-rate.component.html',
  styleUrls: ['./statistics-run-rate.component.css']
})
export class StatisticsRunRateComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
   
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10','11', '12', '13', '14', '15', '16','17', '18', '19','20'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [7, 6, 6.5, 8.2, 7.5, 8.3, 7.5, 6.2, 7.8, 6.6, 7.97, 6, 6.5, 8.2, 7.5, 8.3, 7.6, 6.2], label: 'MUMBAI INDIANS' },
    { data: [4, 6, 8, 10,6.5, 8.2, 7.5, 8.3,4,7,8.3, 7.6, 6.2, 7.8, 6.6, 7.97, 6, 6.5, 8.2,], label: 'CHANNAI SUPER KINGS' }
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
}