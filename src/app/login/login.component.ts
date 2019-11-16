import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  name: string = "";
  password: number;
  
  constructor(private router:Router){}

  public checkLogin(name:string,password:string){
    if((name == "admin") && (password == "admin")){
      this.router.navigate(['/secure']);
      
    } else {
      alert("אינך מורשה");
    }
  }
}
