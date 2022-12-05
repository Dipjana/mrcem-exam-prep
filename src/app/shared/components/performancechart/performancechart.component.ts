import { Component, Input, OnInit } from '@angular/core';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-performancechart',
  templateUrl: './performancechart.component.html',
  styleUrls: ['./performancechart.component.css']
})
export class PerformancechartComponent implements OnInit {
  perdata!: { total_lession: number; total_read: number; total_progress: number; };
  @Input() 
  set perchardata( val: {total_lession: number;total_read: number;total_progress:number}){ this.perdata = val;}

  constructor() { }
  
  ngOnInit(): void {
  }
  // baseUrl = environment.baseUrl;

}
