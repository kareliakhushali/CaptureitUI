export class teacher{
    
    firstname?:string;
    lastname?:string;
    mobilenumber?:number;
    email?:string;
    password?:string;
    constructor(firstname:string,lastname:string,mobilenumber:number,email:string,password:string){
        
        this.firstname=firstname;
        this.lastname=lastname;
        this.mobilenumber=mobilenumber;
        this.email=email;
        this.password = password;
    }
}