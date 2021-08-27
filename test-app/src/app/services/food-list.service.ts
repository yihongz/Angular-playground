import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "Macarrão",
    "Arroz",
    "Feijão"
  ];
  constructor() { }

  public foodList(): Array<string> {
    return this.list;
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value)
    this.list.push(value);
  }

  public foodListAlert(value: string): void {
    return this.emitEvent.emit(value);
  }
}
