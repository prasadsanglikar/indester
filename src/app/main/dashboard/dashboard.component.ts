import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chart: any;
  chart2 = [];
  pie: any;
  doughnut: any;
  // public chart: any;

  ngOnInit(): void {



    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        // responsive: true,
        title: {
          display: true,
        },
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'Total',
            data: [203, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'rgba(24, 3, 252)',
            borderColor: 'rgba(24, 3, 252)',
            fill: false,
          },
          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
          {
            type: 'bar',
            label: 'Close',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(23, 252, 3)',
            borderColor: 'rgba(23, 252, 3)',
            fill: false,
          }
        ]
      }
    });
  }

}

