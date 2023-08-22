import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({

  selector: 'app-capture-image',

  templateUrl: './capture-image.component.html',

  styleUrls: ['./capture-image.component.css'],

  template: '<img [src]="imageUrl" />',

})

export class CaptureImageComponent {

  imageUrl: string="";



  constructor(private router:Router,private http:HttpClient ) {

    const userType = sessionStorage.getItem('teacher');

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }

  }



  ngOnInit() {

    this.http.get('http://localhost:5000/getAttendance', { responseType: 'blob' })

      .subscribe(response => {

        const reader = new FileReader();

        reader.onload = () => {

          this.imageUrl = reader.result as string;

         

        };

        reader.readAsDataURL(response);

      });

    }

}