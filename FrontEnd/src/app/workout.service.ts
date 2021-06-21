import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from './Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  getTrackWorkout(trackDate: Date) {
    return this.http.get(this.URL + 'workout/date/' + trackDate + 'T00:00:00');
  }
  deleteWorkout(id: string) {
    return this.http.delete(this.URL + 'workout/' + id);
  }
  getWorkout(id: string) {
    return this.http.get(this.URL + 'workout/' + id);
  }

  URL: string = "http://localhost:8081/";
  constructor(private http: HttpClient) { };

  putWorkout(workout: Workout) {
    return this.http.put(this.URL + 'workout/' + workout.id, workout, { headers: { "content-type": 'application/json' } });
  }
  getActiveWorkout() {
    return this.http.get(this.URL + 'workout/status/OPEN');
  }

  validateWorkout(workoutTemp: Workout) {
    if (workoutTemp.note.length < 5 || workoutTemp.note.length > 100 || workoutTemp.title.length < 3 || workoutTemp.title.length > 500)
      return 0;
    else
      return 1;
  }
  getWorkouts(id: string) {
    return this.http.get(this.URL + '');
  }

  getCategories() {
    return this.http.get(this.URL + 'category');
  }
  postWorkout(workout: Workout) {
    return this.http.post(this.URL + 'workout', workout, { headers: { "content-type": 'application/json' } });
  }
}
