import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css']
})
export class NavitemComponent {

  @Input() menudata:any;
  baseUrl = environment.baseUrl;
  constructor(public router: Router) { }

   goTo_noChild(menudata : any){
    if(menudata.externalLink){
      window.open(menudata.externalLink, "_blank");
    }
    else{
      this.router.navigate([menudata.link]);
    }
  }
  goTo_withChild(item : any){
    if(item.externalLink){
      window.open(item.externalLink, "_blank");
    }
    else{
      this.router.navigate([item.link]);
    }
  }
}
