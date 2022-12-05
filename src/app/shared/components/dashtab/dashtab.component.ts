import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashtab',
  templateUrl: './dashtab.component.html',
  styleUrls: ['./dashtab.component.css']
})
export class DashtabComponent implements OnInit {
  public openTab = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

}
