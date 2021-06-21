import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  title: string = "Create Workout";
  workout: Workout = new Workout();
  parent:any={button:"Add Workout"};


  constructor(private workoutService: WorkoutService) { }

  postWorkout(workoutTemp: Workout) {
    workoutTemp.comment=null;
    if (!this.workoutService.validateWorkout(workoutTemp)) {
      Swal.fire(
        'Failed!',
        'Error! Give input as per instruction'
      );
      return;
    }
    const promise = this.workoutService.postWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      Swal.fire(
        'Created!',
        'Workout Created Successfully!.',
        'success'
      )
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          Swal.fire(
            'Failed!',
            'Workout Creation Failed ! '+error.error
          )
          console.log(error.error)
        }
        else {
          Swal.fire(
            'Created!',
            'Workout Created Successfully!.',
            'success'
          )
        }
      })
  }

  ngOnInit(): void {
  }

}
