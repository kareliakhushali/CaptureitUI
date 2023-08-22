import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherServicesService } from 'src/app/teacher-services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-add-teacher',
  templateUrl: './admin-add-teacher.component.html',
  styleUrls: ['./admin-add-teacher.component.css']
})
export class AdminAddTeacherComponent {
// define an empty student object
public teacher: any = {};

constructor(private router: Router, private dataService: TeacherServicesService,private http:HttpClient) { 
  const userType = sessionStorage.getItem('userType');
  if(userType === null)
  {
    this.router.navigate(['/login']);
  }
}

// method to create a new student

 

public createTeacher(): void {
  this.dataService.createTeacher(this.teacher);
  this.http.post('http://localhost:5000/api/User/addteacher/',this.teacher)
  .subscribe(responseData=>{
    console.log(responseData);
  });
  
  this.router.navigate(['/teacher-list']);
}

}
