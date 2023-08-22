import { Component } from '@angular/core';
import { AdminAddTeacherComponent } from 'src/app/admin/admin-add-teacher/admin-add-teacher.component';
import { TeacherListComponent } from 'src/app/admin/teacher-list/teacher-list.component';
import { AuthServicesService } from '../../auth-services.service';
import { teacher } from 'src/app/class/teacher';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {
  //logteach: teacher[] = [];
  //teacher: any=[];
  teacher1: any=[];
  user:any='';
  name:any='';
  dept:any='';

  constructor(private http: HttpClient,private AuthServicesService1:AuthServicesService,private router:Router ){
    //this.logteach= AuthServicesService1.getTData();

    //this.teacher = this.logteach.filter(each=>1==1);  
    this.user=this.AuthServicesService1.getuser();
    console.log(this.user);

    const userType = sessionStorage.getItem('teacher');

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }
  }

  onclick(){

      this.http.get('http://localhost:5000/api/User/GetTeacher')
            .subscribe(responseData=>{
        console.log(responseData);
        this.teacher1=responseData;

        this.teacher1.forEach((element: any)  => {
          if(element.semail==this.user){
              this.dept=element.department
              this.name=element.firstName
             
          }
          
        });
        this.http.post(`http://localhost:5000/captureAttendance?teacherName=${this.name}&dept=${this.dept}`,'')
        .subscribe(responseData=>{
          console.log(responseData);
      });
        console.log(this.user);
        console.log(this.dept);
        console.log(this.name);
          
        });
       if(this.name!=undefined){       
        
  }
    alert("Attendance taken Successful");
    
  }
}
