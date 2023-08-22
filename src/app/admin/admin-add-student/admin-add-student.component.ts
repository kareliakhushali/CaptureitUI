import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/class/department';
import { StudentServicesService } from 'src/app/student-services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css']
})
export class AdminAddStudentComponent implements OnInit {
  studentForm: FormGroup | undefined;
  depid? : number = Department.BBA;
  deps? : {id:number, names:string}[]=[]
 
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: [''],
      class: [''],
      pmobileno: ['', Validators.required],
      pemail: ['', [Validators.required, Validators.email]],
      department:['']
    });
  }
  // define an empty student object
  public student: any = {};

  constructor(private router: Router, private dataService: StudentServicesService,private fb: FormBuilder,private http:HttpClient) { 
    const userType = sessionStorage.getItem('userType');
    if(userType === null)
    {
      this.router.navigate(['/login']);
    }
  }

  // method to create a new student
  public createStudent(): void {
    this.dataService.createStudent(this.student);
    //alert(this.student);
    this.http.post('http://localhost:5000/api/User/addstudent/',this.student)
    .subscribe(responseData=>{
     if(responseData == null)
     {
        alert("user already exist");
      }
      console.log(responseData);
    })
    this.router.navigate(['/student-list']);
  }

}
