import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskBoard } from '../task-board-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-update-note.component',
  styleUrl: './update-note.component.css',
  templateUrl: './update-note.component.html',
})
export class UpdateNoteComponent implements OnInit {
  route = inject(ActivatedRoute);
  taskService = inject(TaskBoard);
  updateForm(){
    const task = this.task();
  
    if( task ) {
      this.editForm.patchValue({
        title: task.title,
        description: task.description,
        completed: task.completed,

      })
    } 
  }
  id = toSignal(this.route.paramMap);
  getId = computed(() => this.id()?.get('id'));
  task = computed(() => {
    const id = (this.getId());
    return this.taskService.getTaskSignal()?.find(task => task.id === id);
  });
  editForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    completed: new FormControl(false),
    color: new FormControl ('yellow'),
    })
    ngOnInit(): void {
      this.updateForm()
    }
 onSub() {
  console.log(this.editForm.value);

  if (this.editForm.valid) {
    const id = this.getId();
    if (!id) {
      return;
    }
    const title = this.editForm.value.title!;
    const description = this.editForm.value.description!;
    const completed = this.editForm.value.completed!;
    const  color = this.editForm.value.color!

    this.taskService.updateTask(id, {
      title,
      description,
      completed,
      color
    });
  }
  }
    }