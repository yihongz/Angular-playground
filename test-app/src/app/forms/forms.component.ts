import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public list: Array<{ comida: string, preco: number }> = [
    { comida: "Arroz", preco: 10 },
    { comida: "Feijão", preco: 20.01 },
    { comida: "Ovo", preco: 5.00 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
