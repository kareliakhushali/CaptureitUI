import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from 'src/app/student-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private service: StudentServicesService,private router:Router) { }
  ngOnInit(): void {
    this.GetStudentList()
    const userType = sessionStorage.getItem('userType');
    if(userType === null)
    {
      this.router.navigate(['/login']);
    }
  }
  ProductList: any = [];
  GetStudentList() {
    this.service.getStudentData().subscribe(data => {
      this.ProductList = data;
      console.log(data);
    });
  }
}

