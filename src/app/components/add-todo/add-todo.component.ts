import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../Todo";
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter()
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTodo: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTodo = value;
    })
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a todo!')
      return
    }

    const newTodo ={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
