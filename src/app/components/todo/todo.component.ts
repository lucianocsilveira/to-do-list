import { Component } from '@angular/core';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  task: string = ''
  todoList: Todo[] = []

  addTodo() {

    const item: Todo = {
      isCompleted: false,
      date: new Date(),
      title: this.task
    }

    this.todoList.unshift(item);

    this.task = ''
  }

  onDeleteTask(todo: Todo) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  onCompletTask(todo: Todo) {
    const atualIndex = this.todoList.indexOf(todo);
    const to = todo.isCompleted ? this.todoList.length - 1 : 0;

    this.changePosition(atualIndex, to)

  }

  changePosition(atualIndex: number, to: number) {
    this.todoList.splice(to, 0, this.todoList.splice(atualIndex,1)[0])
  }

}
