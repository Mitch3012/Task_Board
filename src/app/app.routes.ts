import { Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { ReadNoteComponent } from './read-note/read-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';

export const routes: Routes = [
    { path: 'CreateNote', component: CreateNoteComponent},
    { path: 'NoteList', component: NoteListComponent}, 
    { path: 'ReadNote', component: ReadNoteComponent},
    { path: 'tasks/:id/update-note', component: UpdateNoteComponent},
    { path: '', redirectTo:'NoteList', pathMatch: 'full'}
];
