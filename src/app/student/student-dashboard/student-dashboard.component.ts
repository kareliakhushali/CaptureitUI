import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StudentServicesService } from 'src/app/student-services.service';

import { student } from '../../class/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  constructor(private router:Router, private studentservice:StudentServicesService){

   

    const userType = sessionStorage.getItem('student');



   

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }



  }



  OnInit()

  {

    // const userTypes = sessionStorage.getItem('usersType');

    // alert(userTypes);

    // if(userTypes === null)

    // {

    //   this.router.navigate(['/login']);

    // }

  }



}
