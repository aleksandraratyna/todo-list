import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
    { title: 'wypić kawę' },
    { title: 'zjeść pizzę'} ,
    { title: 'zjeść muffinka' },
    { title: 'nakleić naklejkę ngGirls' },
    { title: 'nie jeść pizzy wegańskiej' },
  ];

  constructor(private storage:TodoListStorageService) { }

  getTodoList() { return this.todoList;
  }

  addItem(title: string): void {this.todoList.push({title});
  }

}
