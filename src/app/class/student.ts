export class student{
    id?:number;
    firstname?:string;
    lastname?:string;
    std?:number;
    department?:string;
    mobilenumber?:number;
    parentsemail?:string;
     image?:string;
     email?:string;
    password?:string;
   
    constructor(id:number,
        firstname:string,
        lastname:string,
        std:number,
        department:string,
        mobilenumber:number,
        parentsemail:string,
        image:string,
        email:string,
        password:string)
        {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.std=std;
        this.department = department;
        this.mobilenumber=mobilenumber;
        this.parentsemail=parentsemail;
        this.image=image;
        this.email = email;
        this.password = password;
    }
}