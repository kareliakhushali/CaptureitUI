import { Component,OnInit } from '@angular/core';

import { StudentServicesService } from '../../student-services.service';

import { Router,Route,ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { WebcamImage } from 'ngx-webcam';

import { student } from 'src/app/class/student';



@Component({

  selector: 'app-student-update-profile',

  templateUrl: './student-update-profile.component.html',

  styleUrls: ['./student-update-profile.component.css']

})

export class StudentUpdateProfileComponent implements  OnInit{

  firstname: any;

  pemail: any;

  semail:any;

  pmobileno:any;

  title = 'cameraApp';

  webcamImage: WebcamImage | undefined;

  //lastName:any;





  constructor(public dataService: StudentServicesService,private http:HttpClient,private router:Router,private route: ActivatedRoute ) {

    const userType = sessionStorage.getItem('student');

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }

  }

   



  Student:any =[];

  ngOnInit() {

    const Email = this.route.snapshot.paramMap.get('semail');

    // this.getStudent(Email);    

  }

  // getStudent(studentId:any) {

  //   this.dataService.getStudentData().subscribe((data) => {

  //     this.Student = data.filter((student) => student.email == studentId)

  //   });

  // }

  //const Email = this.route.snapshot.paramMap.get('semail');



  // getloginStudent(Email:string){

  //   return this.dataService.getloginStudent('anjalitank123@gmail.com').subscribe((data) => {

  //       this.Student = data;

  //       console.log(data);

  //     });

  // }



  handleImage(webcamImage: WebcamImage) {

    this.webcamImage = webcamImage;

  }



}