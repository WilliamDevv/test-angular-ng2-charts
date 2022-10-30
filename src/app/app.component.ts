import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      'Dimanche',
    ],
    datasets: [
      {
        data: [15, 5, 45, 120, 35, 0, 0],
        label: 'Durée des sessions',
        fill: true,
        tension: 0.25,
        borderColor: 'rgba(22, 39, 65, 1)',
        backgroundColor: 'rgba(51, 87, 108, 0.85)',
        pointBackgroundColor: 'rgba(51, 87, 108, 1)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
