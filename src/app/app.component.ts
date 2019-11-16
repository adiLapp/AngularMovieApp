import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = "";
  password: number;
  
  public checkLogin(name:string,password:string){
    if((name == "admin") && (password == "admin")){
      alert("Successfull");
    } else {
      alert("אינך מורשה");
    }
  }
}


