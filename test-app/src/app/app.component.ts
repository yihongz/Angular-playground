import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h1>{{getDados.idade}}</h1>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  public addValue:number = 0;

  constructor() { }

  public getDados: {nome: string, idade: number} | undefined;

  ngOnInit(): void { }

  public Add():void {
    this.addValue += 1;
  }

  public setDados(event:{nome:string, idade:number}) {
    this.getDados = event;
  }
}
