import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';

import { FooterComponent } from './footer/footer.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { ViewComponent } from './view/view.component';
import { WorkoutTemplateComponent } from './workout-template/workout-template.component';
import { UpdateWorkoutComponent } from './update-workout/update-workout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrackWorkoutComponent } from './track-workout/track-workout.component';
import { ChartsModule } from 'ng2-charts';
import * as Chart from 'chart.js';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategoryWorkoutComponent } from './category-workout/category-workout.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkoutFormComponent,
    CreateWorkoutComponent,
    ViewComponent,
    WorkoutTemplateComponent,
    EndWorkoutComponent,
    StartWorkoutComponent,
    UpdateWorkoutComponent,
    HeaderComponent,
    StartWorkoutComponent,
    EndWorkoutComponent,
    TrackWorkoutComponent,
    CategoryWorkoutComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot([
    { path: 'create', component: CreateWorkoutComponent },
    { path: 'category', component: CategoryWorkoutComponent },
    { path: 'viewAll', component: ViewComponent },
    { path: 'track', component: TrackWorkoutComponent },
    { path: '', redirectTo: '/viewAll', pathMatch: 'full' }
  ], { useHash: true }),
    BrowserModule, HttpClientModule, FormsModule, ChartsModule, Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
