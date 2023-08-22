import { Component } from '@angular/core';
import { StudentServicesService } from 'src/app/student-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent {
 

constructor(private service: StudentServicesService,private router:Router) { 
  const userType = sessionStorage.getItem('userType');
  if(userType === null)
  {
    this.router.navigate(['/login']);
  }
}

  StudentList: any = [];

  ngOnInit(): void {

    this.onbtech();

  }



  onbtech()

  {

    this.service.getBtechList().subscribe(data => {

      this.StudentList = data;

    });

  }

  onmtech()

  {

    this.service.getMtechList().subscribe(data => {

      this.StudentList = data;

    });

  }

  onmca()

  {

    this.service.getMcaList().subscribe(data => {

      this.StudentList = data;

    });

  }

  onbca()

  {

    this.service.getBcaList().subscribe(data => {

      this.StudentList = data;

    });

  }


}
