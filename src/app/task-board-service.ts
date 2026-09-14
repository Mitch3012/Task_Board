import { inject, Service } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from './task';
import { toSignal } from '@angular/core/rxjs-interop';

@Service()
export class TaskBoard {
  private readonly firestore = inject(Firestore);
  private readonly notesCol = collection(this.firestore,'notes-list');

  // Read
  getTask$(){
    return collectionData(this.notesCol, {

      idField: 'id'
    }) as Observable<Task[]>;
  }
// Create
addTask(task: Omit<Task, 'id'>){
  return addDoc(this.notesCol, task);
}

// Update
updateTask(id: string, patch: Partial<Omit<Task, 'id'>>){
  return updateDoc(doc(this.notesCol, id), patch);
}

// Delete
deleteTask(id: string){
  return deleteDoc(doc(this.notesCol, id));
}
getTaskSignal = toSignal(this.getTask$());

}

