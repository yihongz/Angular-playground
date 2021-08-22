import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome:string = "Paulo";
  public idade:number = 23;
  public checkedDisabled:boolean = true;
  public imgSrc:string = "https://img.ibxk.com.br/2020/01/30/30021141299110.jpg";
  public imgTitle:string = "Título";
  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor:MouseEvent):void {
    console.log(valor);
  }

  public mouseMoveTest(valor:MouseEvent):void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
