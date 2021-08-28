import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

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

  private url: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}/list-food`).pipe(res => res,
      error => error)
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value)
    this.list.push(value);
  }

  public foodListAlert(value: string): void {
    return this.emitEvent.emit(value);
  }
}
