import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-update-workout',
  templateUrl: './update-workout.component.html',
  styleUrls: ['./update-workout.component.css']
})

export class UpdateWorkoutComponent implements OnInit {
  @Input() workout: Workout = new Workout();
  @Output() workoutSuccess: EventEmitter<string> = new EventEmitter<string>();
  parent: any = { button: "Update" };
  workoutAny: any;
  workoutId: Workout;
  fromParent: any;
  constructor(private workoutService: WorkoutService) {

  }

  successHandler(result: string) {
    this.workoutSuccess.emit(result);
  }

  putWorkout(workoutTemp: Workout) {
    if (!this.workoutService.validateWorkout(workoutTemp)) {
      Swal.fire(
        'Failed!',
        'Error! Give input as per instruction'
      );
      return;
    }
    const promise = this.workoutService.putWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      Swal.fire(
        'Updated!',
        'Workout Updated Successfully!.',
        'success'
      )
      setTimeout(() => {
        this.successHandler('1');
      }, 4000);
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          Swal.fire(
            'Failed!',
            'Workout Updation Failed ! ' + error.error
          )
        }
        else {
          Swal.fire(
            'Updated!',
            'Workout Updated Successfully!.',
            'success'
          )
        }
      })
  }

  ngOnInit(): void {
  }
}
