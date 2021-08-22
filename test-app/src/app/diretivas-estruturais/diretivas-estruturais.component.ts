import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition:boolean = true;
  public conditionClick:boolean = true;
  public list:Array<{nome:string, idade: number}> = [
    {nome: 'Paulo', idade: 23},
    {nome: 'Pedro', idade: 21},
    {nome: 'Lucas', idade: 24}
  ];
  public nome:string = 'paulo';

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = this.condition ? false : true;
    },2000)
  }

  public onClick():void {
    this.conditionClick = this.conditionClick ? false : true;
  }

  public onClickAddList(nome:string, idade:number): void {
    this.list.push({nome: nome, idade: idade});
  }

  public onClickEventList(i: number):void {
    this.list.splice(i, 1);
  }
}
