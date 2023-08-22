import { Component } from '@angular/core';

import { WebcamImage } from 'ngx-webcam';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';



@Component({

  selector: 'app-student-data',

  templateUrl: './student-data.component.html',

  styleUrls: ['./student-data.component.css']

})

export class StudentDataComponent {



  studentList:any =[];



  constructor(private router:Router,private http:HttpClient ) {

    const userType = sessionStorage.getItem('student');

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }

    else{

      this.http.get<any>('http://localhost:5000/api/User/getattendancestudent?Email='+userType).subscribe(

        (res) => {

          this.studentList = res;

          console.log(res);

        });

    }

  }

}