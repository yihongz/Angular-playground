import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 5000)
  }
}
