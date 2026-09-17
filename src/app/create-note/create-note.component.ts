import { Component, inject } from '@angular/core';
import { TaskBoard } from '../task-board-service';
import { Task } from '../task';
import { ReactiveFormsModule, FormControl, FormGroup, Validators  } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-create-note.component',
  styleUrl: './create-note.component.css',
  templateUrl: './create-note.component.html',
})
export class CreateNoteComponent {
    taskService = inject(TaskBoard);
    taskForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('', [(Validators.required)]),
      completed: new FormControl(false),
    })
    onSubmit(){
      console.log(this.taskForm.value);
      if (this.taskForm.valid){
        const newTask: Task =  {
          id: crypto.randomUUID(),
          title: this.taskForm.value.title!,
          description: this.taskForm.value.description!,
          completed: this.taskForm.value.completed!,
        
        };
        this.taskService.addTask(newTask);
      }
    }
}