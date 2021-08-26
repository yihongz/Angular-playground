import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
  public list: Array<string> = [
    "Macarrão",
    "Arroz",
    "Feijão"
  ];
  constructor() { }
}
