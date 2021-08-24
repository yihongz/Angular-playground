import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoListComponent,
    HomeComponent,
    TodoInputAddItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
