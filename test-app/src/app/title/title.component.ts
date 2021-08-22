import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Welcome!"

  constructor() { }

  ngOnDestroy(): void {
    console.log("Componente excluído!")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("The title variable was changed successfully!")
  }

  ngOnInit(): void {
  }

}
