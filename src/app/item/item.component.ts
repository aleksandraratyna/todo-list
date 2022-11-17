import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `<div class="todo-item">
    <p>
    {{ toDoItem.title }}
    </p></div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() toDoItem: any; 

  constructor() { }

  ngOnInit() {
  }

}
