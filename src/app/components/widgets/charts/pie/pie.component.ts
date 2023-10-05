import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PieComponent implements OnInit {
  @ViewChild('MyChart', { static: true }) MyChart?: any;
  @Input() data?: any[] ;
  @Input() label?: string[];
  public chart: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.MyChart.nativeElement, {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.label,
        datasets: [
          {
            data: this.data,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
