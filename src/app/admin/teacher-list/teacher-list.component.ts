import { Component,OnInit } from '@angular/core';
import { TeacherServicesService } from 'src/app/teacher-services.service';
import { StudentServicesService } from 'src/app/student-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements  OnInit{
  //teachers: {  firstname: string; lastname: string; mobilenumber: number;email: string;image:string }[] | undefined;
  selectedTeacher: any;
  TeacherdataService: any;

  constructor(public dataService:StudentServicesService,private router:Router) {
    const userType = sessionStorage.getItem('userType');
    if(userType === null)
    {
      this.router.navigate(['/login']);
    }
   }

  TeacherList:any =[];
  ngOnInit() {
    this.getTeacher();    
  }
  // public selectTeacher(teacher: (teacher: any) => void){
  //   this.selectTeacher = teacher;
  // }

  onDelete(id: number) {
    let request = confirm("Sure you want to Delete ?");
    //alert(id);
    if (request) {
      this.dataService.deleteTeacher(id).subscribe(response => {
        if (response) {
          alert("Record deleted");
          this.getTeacher();
        }
        else {
          alert("Some internal error occur");
        }
      })
    }
  }

  getTeacher() {
    this.dataService.getTeacherData().subscribe((data) => {
      this.TeacherList = data;
      console.log(data);
    });
  }

}
