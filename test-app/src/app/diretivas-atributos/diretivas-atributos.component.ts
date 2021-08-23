import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor:boolean = false;
  public h:string = '20px';
  public backgroundColor = 'green';
  public nome:string = "";
  public list:Array<{nome:string}> = [{nome: "Paulo"}, {nome: "Pedro"}];
  public date:Date = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = this.valor ? false : true;

      this.h = this.h == '20px' ? '50px' : '20px';
    }, 2000)
  }

  adicionarNaLista(nome:string): void {
    this.list.push({nome: nome});
  }

}
