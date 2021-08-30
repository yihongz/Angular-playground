import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from './services/food-list.service';
@Component({
  selector: 'app-root',
  template: `
  <app-forms></app-forms>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  public addValue:number = 0;

  constructor() {

  }

  public getDados: {nome: string, idade: number} | undefined;

  ngOnInit(): void {
    
  }

  public Add():void {
    this.addValue += 1;
  }

  public setDados(event:{nome:string, idade:number}) {
    this.getDados = event;
  }
}
