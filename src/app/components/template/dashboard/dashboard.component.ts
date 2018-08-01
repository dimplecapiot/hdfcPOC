import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() { }

  getCoordinates(event) {
    // const target = event.target || event.srcElement || event.currentTarget;
    console.log(event.srcElement.parentElement.offsetLeft);
    console.log(event.srcElement.parentElement.offsetTop);

  }
}
