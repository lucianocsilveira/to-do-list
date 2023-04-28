import { MatDialog } from '@angular/material/dialog';
import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(public dialog: MatDialog){}

  @Input() todo!: Todo
  @Output() taskDeleted: EventEmitter<Todo> = new EventEmitter()
  @Output() taskCompleted: EventEmitter<Todo> = new EventEmitter()
  completed:boolean = false

  onComplete() {
    this.todo.isCompleted = !this.todo.isCompleted
    this.taskCompleted.emit(this.todo)
  }

  onDelete (todo: Todo) {
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe((event: boolean) =>{
      if(event){
        this.taskDeleted.emit(todo);
      }
    });
  }

}
