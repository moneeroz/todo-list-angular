import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from './../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor (private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => (this.todos =this.todos.filter(e => e.id !== todo.id)));
  }

  toggleReminder(todo: Todo) {
    todo.reminder = !todo.reminder;
    this.todoService.updateTodoReminder(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }
}
