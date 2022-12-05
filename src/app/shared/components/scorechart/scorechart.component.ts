import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-scorechart',
  templateUrl: './scorechart.component.html',
  styleUrls: ['./scorechart.component.css']
})
export class ScorechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.RenderChart()
  }

  RenderChart(){
    const myChart =   new Chart('piechart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}
}
