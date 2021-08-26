import { Component, DoCheck } from '@angular/core';
//Interfaces
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
    
  }

  public setEmitTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Você deseja realmente deletar tudo? ");

    if (confirm) this.taskList = [];
  }

  public validateInput(e: string, i: number): void {
    if(!e.length) {
      const confirm = window.confirm("A tarefa está vázia, deseja deletar ?");
      if(confirm) this.deleteItemTaskList(i);
    }
  }

  public setLocalStorage(): void {
    if(this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
