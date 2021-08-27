import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
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
    this.list.push(value);
  }
}
