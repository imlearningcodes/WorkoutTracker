import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWorkoutComponent } from './category-workout.component';

describe('CategoryWorkoutComponent', () => {
  let component: CategoryWorkoutComponent;
  let fixture: ComponentFixture<CategoryWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
