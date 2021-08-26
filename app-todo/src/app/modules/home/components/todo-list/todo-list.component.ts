import { Component, OnInit } from '@angular/core';

//Interfaces
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];
  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string): void {
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Você deseja realmente deletar tudo? ");

    if(confirm) this.taskList = [];
  }
}
