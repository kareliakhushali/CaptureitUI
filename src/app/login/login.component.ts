import { Component } from '@angular/core';
import { data } from '../class/auth';
import { student } from '../class/student';
import { teacher } from '../class/teacher';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators,FormGroup,FormBuilder} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loguser: data[] = [];
  data: data[]=[];
  //logstud: student[] = [];
  //stud: student[]=[];
  //logteach: teacher[] = [];
  //teacher: teacher[]=[];
  Email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.minLength(9)]);
  loginForm: FormGroup;
  loginSuccess = false;

  constructor(public AuthServicesService12: AuthServicesService, private router: Router,private formBuilder: FormBuilder,private http:HttpClient) {


    this.loguser= AuthServicesService12.getData();
    this.data = this.loguser.filter(each=>1==1);

    // this.logstud= AuthServicesService.getSData();
    // this.stud = this.logstud.filter(each=>1==1);

    // this.logteach= AuthServicesService.getTData();
    // this.teacher = this.logteach.filter(each=>1==1);

    this.loginForm = this.formBuilder.group({
      Email: this.Email,
      password: this.password
    });

  }

  studentLogin(Email:any){
    this.http.get<any>('http://localhost:5000/api/User/loginStudent?Email='+Email).subscribe(res =>
    {
      const user = res.find((a:any)=>{
        return a.semail === this.loginForm.value.Email && a.password === "123456789"
      });
      if(user){
        sessionStorage.setItem('student',this.loginForm.value.Email);
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(['/student-dashboard'])
      //this.loginSuccess = true;
      }else{
        if(user != null)
        {
          alert("User not Found");
        }
        else
        {

          this.teacherLogin(this.Email.value);
        }
      }
      console.log(res);
    });
  }

  teacherLogin(Email:any){
    this.http.get<any>('http://localhost:5000/api/User/loginTeacher?Email='+Email).subscribe(res =>
    {
      const user = res.find((a:any)=>{
        return a.semail === this.loginForm.value.Email && a.password === "123456789"
      });
      if(user){
        sessionStorage.setItem('teacher',this.loginForm.value.Email);
        alert('Login Succesful');
        this.AuthServicesService12.setuser(Email);
       //   alert(this.AuthServicesService12.getuser());
        this.loginForm.reset()
      this.router.navigate(['/teacher-dashboard']);
      //this.loginSuccess = true;
      }else{
        alert("user not found")
      }
      console.log(res);
    });
  }


login(){
      if (this.loginForm.invalid) {  return; }

    const admin = this.loguser.find(u => u.Email === this.Email.value  && u.password === this.password.value);

    if (admin) {
      sessionStorage.setItem('userType',this.loginForm.value.Email);
        // console.log("sucess",admin);
        // window. alert('Admin Loggedin Succesfully !');
        this.AuthServicesService12.login();
        this.router.navigate(['/admin-dashboard']);
        //this.loginSuccess = true;
      }
      else if(this.Email.value){
        this.studentLogin(this.Email.value);
      }
      else if(this.Email.value){
        this.teacherLogin(this.Email.value);
      }
      else {
        window. alert('Invalid Login Credentials');
        this.router.navigate(['/login']);
         console.log("fail")
      }

}



  // login(){

  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const admin = this.loguser.find(u => u.email === this.email.value  && u.password === this.password.value);
  //   const stud = this.logstud.find(u => u.email === this.email.value  && u.password === this.password.value);
  //   const teacher = this.logteach.find(u => u.email === this.email.value  && u.password === this.password.value);

  //   if (admin) {
  //       // console.log("sucess",admin);
  //       // window. alert('Admin Loggedin Succesfully !');
  //       this.AuthServicesService.login();
  //       this.router.navigate(['/admin-dashboard']);
  //     }
  //   else if (stud) {
  //       // console.log("sucess",stud);
  //       // window. alert('Student Loggedin Succesfully !');
  //       this.AuthServicesService.login();
  //       this.router.navigate(['/student-dashboard']);
  //     }
  //   else if (teacher) {
  //       // console.log("sucess",teacher);
  //       // window. alert('Teacher Loggedin Succesfully !');
  //       this.AuthServicesService.login();
  //       this.router.navigate(['/teacher-dashboard']);
  //     }

  //   else {
  //       // window. alert('Invalid Login Credentials');
  //       this.router.navigate(['']);
  //       // console.log("fail")
  //     }

  // }

}
