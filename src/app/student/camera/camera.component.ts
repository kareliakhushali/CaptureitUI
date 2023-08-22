import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})

export class CameraComponent  implements OnInit {

  @Output() getPicture = new EventEmitter<WebcamImage>();

  showWebcam = true;

  isCameraExist = true;
  imagelist : any =[];



  errors: WebcamInitError[] = [];
  studentList :any =[];


  // webcam snapshot trigger

  private trigger: Subject<void> = new Subject<void>();

  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();



  constructor(private http:HttpClient,private router:Router) {

    const userType = sessionStorage.getItem('student');

    if(userType === null)

    {

      this.router.navigate(['/login']);

    }

    else{

      this.http.get<any>('http://localhost:5000/api/User/getattendancestudent?Email='+userType).subscribe(

        (res) => {

          this.studentList = res;

          console.log(res);

        });

    }

  }





  ngOnInit(): void {

    WebcamUtil.getAvailableVideoInputs()

      .then((mediaDevices: MediaDeviceInfo[]) => {

        this.isCameraExist = mediaDevices && mediaDevices.length > 0;

      });

  }



  takeSnapshot(): void {

    this.trigger.next();

  }



  onOffWebCame() {

    this.showWebcam = !this.showWebcam;

  }



  handleInitError(error: WebcamInitError) {

    this.errors.push(error);

  }



  changeWebCame(directionOrDeviceId: boolean | string) {

    this.nextWebcam.next(directionOrDeviceId);

  }



  handleImage(webcamImage: WebcamImage) {

    const userType = sessionStorage.getItem('student');

    let reqHeaders = new HttpHeaders().set('Content-Type','application/json');

    this.imagelist = webcamImage.imageAsBase64

    this.http.post('http://localhost:5000/api/User/takeimage?email='+userType,JSON.stringify(this.imagelist),{headers:reqHeaders})

      .subscribe(() =>

    {

      debugger;

      this.getPicture.emit(webcamImage);

      console.log(webcamImage.imageAsBase64);

     // alert(webcamImage);

      this.showWebcam = false;

    });

    //this.showWebcam = false;

  }





  get triggerObservable(): Observable<void> {

    return this.trigger.asObservable();

  }



  get nextWebcamObservable(): Observable<boolean | string> {

    return this.nextWebcam.asObservable();

  }

}
