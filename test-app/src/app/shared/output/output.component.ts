import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list:Array<{nome:string, idade:number}> = [
    {nome: "Paulo", idade: 23},
    {nome: "Pedro", idade: 21},
    {nome: "Ketlen", idade: 19}
  ];

  @Output() public enviarDados = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(i:number) {
    this.enviarDados.emit(this.list[i]);
  }
}
