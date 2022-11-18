import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  date: any = new Date();
  constructor() {}

  // baseUrl = environment.baseUrl;
  // baseUrl = environment.baseUrl.replace(/^https?:\/\//, 'www.');
  ngOnInit() { 
    this.date = new Date().getFullYear();
  }
}
