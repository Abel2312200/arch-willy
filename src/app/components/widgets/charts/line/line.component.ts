import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild("MyChart",{static : true}) MyChart ?: any;
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart(this.MyChart.nativeElement, {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [ ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],

          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],

          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
