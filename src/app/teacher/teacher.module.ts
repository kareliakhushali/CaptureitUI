import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherViewAttandanceComponent } from './teacher-view-attandance/teacher-view-attandance.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CaptureImageComponent } from './capture-image/capture-image.component';


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TeacherViewAttandanceComponent,
    CaptureImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TeacherDashboardComponent,
    TeacherViewAttandanceComponent
  ],
})
export class TeacherModule { }
