import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { StudentServicesService } from 'src/app/student-services.service';

import { student } from '../../class/student';

import { HttpClient } from '@angular/common/http';



@Component({

  selector: 'app-student-view-attandance',

  templateUrl: './student-view-attandance.component.html',

  styleUrls: ['./student-view-attandance.component.css']

})

export class StudentViewAttandanceComponent{



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