import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTemplateComponent } from './workout-template.component';

describe('WorkoutTemplateComponent', () => {
  let component: WorkoutTemplateComponent;
  let fixture: ComponentFixture<WorkoutTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
