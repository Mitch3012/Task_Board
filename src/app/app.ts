import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { TaskBoard } from './task-board-service';
import { NoteListComponent } from './note-list/note-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-board');
   taskBoard = inject(TaskBoard);
  taskCount = computed(()=> this.taskBoard.getTaskSignal()?.length)
  }