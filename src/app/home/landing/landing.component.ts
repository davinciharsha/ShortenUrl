import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  hideDummyHtml: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.hideDummyHtml = false;
  }

  tryUrlShortener(){
    this.hideDummyHtml = true;
  }

}
