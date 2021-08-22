import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor:boolean = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = this.valor ? false : true;
    }, 2000)
  }

}
