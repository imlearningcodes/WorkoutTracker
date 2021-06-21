import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-end-workout',
  templateUrl: './end-workout.component.html',
  styleUrls: ['./end-workout.component.css']
})
export class EndWorkoutComponent implements OnInit {


  @Input() workout: Workout = new Workout();
  @Output() workoutSuccess: EventEmitter<string> = new EventEmitter<string>();
  parent: any = { button: "Update" };
  workoutAny: any;
  dateString: any;
  messageSuccess: boolean;
  constructor(private workoutService: WorkoutService) {
  }
  successHandler(result: string) {
    this.workoutSuccess.emit(result);
  }

  putWorkout() {
    this.workout.status = "CLOSED";
    let newWorkout: Workout = new Workout();
    newWorkout.title = this.workout.title;
    newWorkout.note = this.workout.note;
    newWorkout.caloriesBurnt = this.workout.caloriesBurnt;
    newWorkout.category = this.workout.category;
    newWorkout.status = "OPEN";
    let tempdate: any = this.workout.endDateTime + '.000+05:30'
    this.workout.endDateTime = tempdate;

    const promise = this.workoutService.putWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      Swal.fire(
        'Ended!',
        'Workout Ended Successfully!.',
        'success'
      )
      const promise1 = this.workoutService.postWorkout(newWorkout);
      promise1.subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
          if (error.status != 201) {
            Swal.fire(
              'Failed!',
              'Workout Failed while updating! ' + error.error
            )
          }
        });
        setTimeout(() => {
          this.successHandler('1');
        }, 4000);
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          Swal.fire(
            'Failed!',
            'Workout Creation Failed ! ' + error.error
          )
        }
        else {
          Swal.fire(
            'Ended!',
            'Workout Ended Successfully!.',
            'success'
          )
        }
      })
  
  }

  ngOnInit(): void {
  }
}


