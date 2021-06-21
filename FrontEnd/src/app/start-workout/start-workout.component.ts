import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {

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
    if (!this.workoutService.validateWorkout(this.workout)) {
      Swal.fire(
        'Error!',
        'Workout Validation Error ! '
      )
      return;
    }
    let tempdate: any = this.workout.startDateTime + '.000+05:30'
    this.workout.startDateTime = tempdate;
    const promise = this.workoutService.putWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      Swal.fire(
        'Started!',
        'Workout Started Successfully!.',
        'success'
      )
      this.messageSuccess = true;
      setTimeout(() => {
        this.messageSuccess = false;
        this.successHandler('1');
      }, 4000);
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          Swal.fire(
            'Failed!',
            'Workout Start Failed ! ' + error.error
          )
        }
        else {
          Swal.fire(
            'Started!',
            'Workout Started Successfully!.',
            'success'
          )
        }
      })
  }

  ngOnInit(): void {

  }

}
