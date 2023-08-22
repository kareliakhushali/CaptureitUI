import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherViewAttandanceComponent } from './teacher/teacher-view-attandance/teacher-view-attandance.component';
import { CaptureImageComponent } from './teacher/capture-image/capture-image.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentUpdateProfileComponent } from './student/student-update-profile/student-update-profile.component';
import { StudentViewAttandanceComponent } from './student/student-view-attandance/student-view-attandance.component';
import { AdminAddStudentComponent } from './admin/admin-add-student/admin-add-student.component';
import { AdminAddTeacherComponent } from './admin/admin-add-teacher/admin-add-teacher.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { TeacherListComponent } from './admin/teacher-list/teacher-list.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { data } from './class/auth';
import { AttendanceReportComponent } from './admin/attendance-report/attendance-report.component';
import { StudentDataComponent } from './student/student-data/student-data.component';
 
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'teacher-dashboard',component:TeacherDashboardComponent},
  {path:'teacher-view-attandence',component:TeacherViewAttandanceComponent},
  {path:'capture',component:CaptureImageComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:"upload-profile",component:StudentUpdateProfileComponent},
  {path:"view-attendance",component:StudentViewAttandanceComponent},
  {path:'admin-add-student',component:AdminAddStudentComponent},
  {path:'admin-add-teacher',component:AdminAddTeacherComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'teacher-list',component:TeacherListComponent},
  {path:  "", pathMatch:  "full",redirectTo:  "admin-dashboard"},
  {path:'attendence-report',component:AttendanceReportComponent},
  {path:'student-data',component:StudentDataComponent}
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AdminModule,TeacherModule,StudentModule]
})
export class AppRoutingModule { }
