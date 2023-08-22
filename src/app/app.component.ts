import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';
import {StudentServicesService } from './student-services.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaptureIt';
  url: any = '';

  showHead: boolean = false;

  OnInit(){}
studentData=null;
  constructor(public _Router: Router,private _obj:StudentServicesService) {
    //  this.url = this._Router.url;
    _obj.getStudentData().subscribe(data=>{
      console.log(data);
    })
     _Router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });

     console.log("--->>>", this.url);
  }
}
