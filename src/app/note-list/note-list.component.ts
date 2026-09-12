import { Component, inject } from '@angular/core';
import { TaskBoard } from '../task-board-service';
import { Task } from '../task';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-note-list.component',
  styleUrl: './note-list.component.css',
  templateUrl: './note-list.component.html',
})
export class NoteListComponent {
  taskService = inject(TaskBoard);
  tasks = this.taskService.getTaskSignal;
  currentTask: Task | null = null;

  getTaskDetails(tasks: Task){
    this.currentTask = tasks;
  }
  onDelete(id:string){
    this.taskService.deleteTask(id);
  }
}