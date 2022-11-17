import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `<div class = "todo-app"><h1> 
  {{ title }} 
  </h1>
  <h3 *ngIf="userLoggedIn">Welcome to todo-app</h3>
  <todo-input (submit)="addItem($event)"></todo-input>
  <ul>
  <!--<li *ngFor="let item of toDoList">{{item.title}}</li>-->
  <li *ngFor="let item of todoList"><todo-item [toDoItem] = "item"></todo-item></li>
  </ul>
  <button class="btn btn-violet" (click)="removeItem()">Remove</button></div>
  `,
  
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

constructor(private todoListService:TodoListService) { }

ngOnInit() {
  this.todoList = this.todoListService.getTodoList();
 // console.log(JSON.stringify(this.todoList));
 // console.log(this.todoList);
}


  userLoggedIn: boolean = true;
  title = 'todo-app!';
  todoList = [
  ];

  addItem(title: string): void {this.todoListService.addItem(title)}

}
