import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],

})
export class BarComponent implements OnInit {
  @ViewChild('MyChart', { static: true }) MyChart?: any;

  @Input() data?: any[] = [
    {
      label: 'Sales',
      data: ['467', '576', '572', '79', '92', '574', '573', '576'],
    },
    {
      label: 'Profit',
      data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
    },
  ];
  @Input() label?: string[];

  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.MyChart.nativeElement, {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.label,
        datasets: this.data as [],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
