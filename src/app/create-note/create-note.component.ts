import { Component, inject } from '@angular/core';
import { TaskBoard } from '../task-board-service';
import { Task } from '../task';
import { ReactiveFormsModule, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-create-note.component',
  styleUrl: './create-note.component.css',
  templateUrl: './create-note.component.html',
})
export class CreateNoteComponent {
    taskService = inject(TaskBoard);
    taskForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('', [(Validators.required)]),
      complete: new FormControl,
    })
    onSubmit(){
      console.log(this.taskForm.value);
      if (this.taskForm.valid){
        const newTask: Task =  {
          id: crypto.randomUUID(),
          title: this.taskForm.value.title!,
          description: this.taskForm.value.description!,
          completed: this.taskForm.value.complete!,
        
        };
        this.taskService.addTask(newTask);
      }
    }
}
