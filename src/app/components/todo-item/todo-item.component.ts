import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../Todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();

  faTimes = faTimes;

  ngOnInit(): void {}

  onDelete(todo: Todo | undefined) {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todo | undefined) {
    this.onToggleReminder.emit(todo);
  }

}
