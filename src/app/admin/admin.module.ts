import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminAddTeacherComponent } from './admin-add-teacher/admin-add-teacher.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AdminStudentUpdateComponent } from './admin-student-update/admin-student-update.component';
import { AdminTeacherUpdateComponent } from './admin-teacher-update/admin-teacher-update.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';

@NgModule({
  declarations: [
    AdminAddStudentComponent ,
    AdminAddTeacherComponent,
    AdminDashboardComponent,
    StudentListComponent,
    TeacherListComponent,
    AdminStudentUpdateComponent,
    AdminTeacherUpdateComponent,
    AttendanceReportComponent,

  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports:[
    AdminAddStudentComponent,
    AdminAddTeacherComponent,
    AdminDashboardComponent,
    StudentListComponent,
    TeacherListComponent,
    AdminStudentUpdateComponent,
    AdminTeacherUpdateComponent
  ]
})
export class AdminModule { }
