import { Injectable } from '@angular/core';
import { student } from './class/student';
import { teacher } from './class/teacher';
import { data } from './class/auth';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  private data:data[]=[]
  private stud:student[]=[]
  private teacher:teacher[]=[]
  public loggedIn = false;
  readonly apiUrl = 'http://localhost:5000/api/';
  public user:string='';

  
    constructor(private router: Router,private http:HttpClient) { 

      this.data =[
        new data ("khushali@gmail.com","123456789")     
      ];
  
      // this.stud =[
      //   new student (1,"Ayush","Modi",3,"Web",1234567890,"abc@gmail.com","a.jpeg","ayush12@gmail.com","ayush1234")     
      // ];
  
      
      this.teacher =[
        new teacher ("hitarthi","rai",1234567890,"hitu123@gmail.com","hitu12345")  
      ];
    }

    getStudentData():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrl + 'User/GetTeacher');
    }  
  
    setuser(a:string){
      this.user=a;

    }
    getuser():string{
      return this.user;

    }
    getData():data[]{
      return this.data;
    }
    
    // getSData():student[]{
    //   return this.stud;
    // }

    // loginStudent(Email:any):Observable<any>{
    //   return this.http.get<any[]>(this.apiUrl + 'User/loginStudent?Email='+Email);
    // }

    getTData():teacher[]{
      return this.teacher;
    }
    getAdata(usser:string):data|undefined{
      let user = this.data.find(each=> each.Email==usser);
      return user;
    }
    login() {
      this.loggedIn = true;
    }
  
    isLoggedIn() {
      return this.loggedIn;
    }
    logout() {                            
      //this.loggedIn;
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
}
