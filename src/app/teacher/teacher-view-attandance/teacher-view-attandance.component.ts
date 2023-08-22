import { Component } from '@angular/core';
import { StudentServicesService } from 'src/app/student-services.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-view-attandance',
  templateUrl: './teacher-view-attandance.component.html',
  styleUrls: ['./teacher-view-attandance.component.css']
})
export class TeacherViewAttandanceComponent {

  constructor(private service: StudentServicesService, private router:Router,private http:HttpClient) {



    const userType = sessionStorage.getItem('teacher');

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }
else{
  this.http.get<any>('http://localhost:5000/api/User/teacherAttendance?Email='+userType).subscribe(
    (res)=>{
      if(res==null)
      {
        alert("user already exist");
      }
      else{
        this.StudentList = res;
        console.log(res);
      }
    }
  );

}



}



StudentList: any = [];



ngOnInit(): void {

  this.onbtech();

}

onbtech() {

  this.service.getBtechList().subscribe((data) => {

    this.StudentList = data;

  });

}



onmtech() {

  this.service.getMtechList().subscribe((data) => {

    this.StudentList = data;

  });

}



onmca() {

  this.service.getMcaList().subscribe((data) => {

    this.StudentList = data;

  });

}



onbca() {

  this.service.getBcaList().subscribe((data) => {

    this.StudentList = data;

  });

}

}
