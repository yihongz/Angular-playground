import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <app-output></app-output>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  public addValue:number = 0;

  constructor() { }

  ngOnInit(): void { }

  public Add():void {
    this.addValue += 1;
  }
}
