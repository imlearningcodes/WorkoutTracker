export class Workout {
    id: string;
    title: string = "default";
    note: string = '';
    caloriesBurnt: number = 1;
    startDateTime: Date;
    endDateTime: Date;
    comment: string;
    category: string = "ACTIVE";
    status: string = "OPEN";
    started: string = "started";
}