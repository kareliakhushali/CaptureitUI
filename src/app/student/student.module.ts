import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentUpdateProfileComponent } from './student-update-profile/student-update-profile.component';
import { StudentViewAttandanceComponent } from './student-view-attandance/student-view-attandance.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { StudentDataComponent } from './student-data/student-data.component';


@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentUpdateProfileComponent,
    StudentViewAttandanceComponent,
    CameraComponent,
    StudentDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    WebcamModule
  ],
  exports:[
    StudentDashboardComponent,
    StudentUpdateProfileComponent,
    StudentViewAttandanceComponent
  ]
})
export class StudentModule { }
