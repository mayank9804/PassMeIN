import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth:AuthService,private _route:Router) { }
  public regIn:boolean;
  public message:string;
  ngOnInit() {
    this.message = null;
  }
  public register(newUser:any){
    this.regIn = true;
    this._auth.registerUser(newUser).subscribe(res=>{
      console.log(res['error']);
      this.regIn = false;

      if(res["success"]==false){
        if(res["message"]=="Timed out")
          this.message = "Request timed out. If you don't have the mobile application. Please download the application and try back again";
        else if(res["message"]=="Access Denied")
          this.message = "You have denied the request.";
      }else{
        this._route.navigate(['/dashboard']);
      }
      
    },err=>{
      console.log(err);
      this.message = "Some error occurred. Please try again later.";
      this.regIn = false;
    },()=>{
      console.log("Complete");
      this.regIn = false;
    });  
  }
}
