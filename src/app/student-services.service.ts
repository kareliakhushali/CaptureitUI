import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  private students: Array<any>;
  readonly apiUrl = 'http://localhost:5000/api/';

  constructor(private http:HttpClient) {
    // create an empty array to store students
    this.students = [];
  }
    getStudentData():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrl + 'User/GetStudent');
    }
    getTeacherData():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrl + 'User/GetTeacher');
    }
    deleteStudent(rollNo:any):Observable<any>{
      return this.http.delete(this.apiUrl + 'User/deletestudent?rollNo='+rollNo);
    }
    deleteTeacher(id:number):Observable<any>{
      return this.http.delete(this.apiUrl+'User/deleteteacher?id='+id);
    }
    

getBtechList(): Observable<any[]> {

      return this.http.get<any[]>(this.apiUrl + 'User/getbtech');

     

    }

    getMtechList(): Observable<any[]> {

      return this.http.get<any[]>(this.apiUrl + 'User/getmtech');

     

    }

    getMcaList(): Observable<any[]> {

      return this.http.get<any[]>(this.apiUrl + 'User/getmca');

     

    }

    getBcaList(): Observable<any[]> {

      return this.http.get<any[]>(this.apiUrl + 'User/getbca');

     

    }

    getloginStudent(Email:string):Observable<any[]>{

      return this.http.get<any[]>(this.apiUrl + 'User/loginStudent?Email='+Email);

    }
    updateStudent(email:any):Observable<any>{

      return this.http.put<any>(this.apiUrl+'User/Update/',email);

    }
    getAttendance(Email:any):Observable<any[]>{

      return this.http.get<any[]>(this.apiUrl + 'User/getattendancestudent?Email='+Email);

    }
    
  // method to return all students
  public getStudents(): Array<any> {
    return this.students;
  }

  // method to add a new student
  public createStudent(student: any): void {
    this.students.push(student);
  }
}
