import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics-worm',
  templateUrl: './statistics-worm.component.html',
  styleUrls: ['./statistics-worm.component.css']
})
export class StatisticsWormComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10','11', '12', '13', '14', '15', '16','17', '18', '19','20'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,28, 48, 40, 19, 86, 27, 76,56, 55, 40,28, 48, 40], label: 'MUMBAI INDIANS' },
    { data: [28, 48, 40, 19, 86, 27, 76,65, 59, 80, 81, 56, 55, 40, 27, 76,65, 59, 80, 81], label: 'CHANNAI SUPER KINGS' }
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