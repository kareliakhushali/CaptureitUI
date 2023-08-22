import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherServicesService {
  private teachers: Array<any>;

  constructor() {
    // create an empty array to store teachers
    this.teachers = [];
  }

  // method to return all teachers
  public getTeachers(): Array<any> {
    return this.teachers;
  }

  // method to add a new teacher
  public createTeacher(teacher: any): void {
    this.teachers.push(teacher);
  }
}
