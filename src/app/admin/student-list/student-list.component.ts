import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../../student-services.service';
import { Router,Route,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements  OnInit {
  // students: {
    
  //   department: any;
  //   formFile: any; id:number; RollNo: string; firstname: string; lastname: string; class: number;year:number; pmobileno:number ,pemail: string,semail:string,image:string; 
  //   }[] | undefined;

      //selectedStudent: any;
       
      constructor(public dataService: StudentServicesService,private router:Router, private route: ActivatedRoute,private http:HttpClient ) {
        const userType = sessionStorage.getItem('userType');
        if(userType === null)
        {
          this.router.navigate(['/login']);
        }
       }
      
      StudentList : any = [];
      ngOnInit():void {
        this.getStudent();    
      }

      // getStudentList:any=[];
      

      // public getStudents() {
      //   this.dataService.getStudentData().subscribe(data => {
      //     this.getStudentList= data;
      //     console.log(data);
      //   });
      // }

      // public selectStudent(student: (student: any) => void){
      //   this.selectStudent = student;
      // }

       onDelete(rollNo: number) {
        let request = confirm("Sure you want to Delete ?");
        //alert(id);
        if (request) {
          this.dataService.deleteStudent(rollNo).subscribe(response => {
            if (response) {
              alert("Record deleted");
              this.getStudent();
            }
            else {
              alert("Some internal error occur");
            }
          })
        }
      }

      getStudent() {
        this.dataService.getStudentData().subscribe((data) => {
          this.StudentList = data;
          console.log(data);
        });
      }

      // public getStudent(): void {
      //   this.dataService.getStudents();
      //   this.http.get('https://localhost:5000/api/User/GetStudent',this.student)
      //   .subscribe(responseData=>{
      //     console.log(responseData);
      //   });
      // }
}
