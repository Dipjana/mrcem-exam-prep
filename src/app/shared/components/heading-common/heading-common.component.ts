import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-common',
  templateUrl: './heading-common.component.html',
  styleUrls: ['./heading-common.component.css']
})
export class HeadingCommonComponent implements OnInit {
  @Input() name = '';
  constructor() { }

  ngOnInit(): void {
  }

}
