import { Component, OnInit } from '@angular/core';

//Interfaces
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {
      task: "Alguma tarefa aleatória.",
      checked: true
    },
    {
      task: "Tarefa 2.",
      checked: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
