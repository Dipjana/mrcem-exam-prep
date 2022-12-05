import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartdata:Array<any>=[];
  showchart = false;
  chartpercent!: { showper: boolean; data: number; };
  
  constructor() { }

  ngOnInit(): void {
  }

}
