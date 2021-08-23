import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-atributos>
    <h1>Diretivas de atributos</h1>
    <hr/>
  </app-diretivas-atributos>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
