import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadNoteComponent } from './read-note.component';

describe('ReadNoteComponent', () => {
  let component: ReadNoteComponent;
  let fixture: ComponentFixture<ReadNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadNoteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
