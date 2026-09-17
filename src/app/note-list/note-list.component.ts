import { Component, computed, inject } from '@angular/core';
import { TaskBoard } from '../task-board-service';
import { Task } from '../task';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-note-list',
  styleUrl: './note-list.component.css',
  templateUrl: './note-list.component.html',
})
export class NoteListComponent {
  taskService = inject(TaskBoard);
  currentTask: Task | null = null;

  getTaskDetails(tasks: Task){
    if (this.currentTask?.id === tasks.id){
      this.currentTask = null;
    } else{
      this.currentTask = tasks;
    }
  }
tasks = computed(() => {
  return [...(this.taskService.getTaskSignal() ?? [])]
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

      return dateB - dateA;
    });
});

  confirmDelete(id:string) {
    const confirmed = confirm('Are you sure you want to delete this task?')
    if (confirmed) {
      this.onDelete(id);
    }
  }

async onDelete(id: string) {
  await this.taskService.deleteTask(id);
  console.log('Deletion Complete!')
}
  }
