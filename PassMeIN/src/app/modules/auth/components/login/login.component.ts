import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mode:number;
  public loggingIn :boolean;
  public message:string;
  constructor(private _auth:AuthService,private _route:Router) { }

  ngOnInit() {
    this.mode = 2;
    this.loggingIn = false;
    this.message=null;
  }

  public loginMode(mode:number){
    this.message = null;
    this.mode = mode;
  }
  public login(userCredential:any){
    this.loggingIn = true;
    let toSubmit:any={
      "phone":"",
      "email":""
    };
    for (let key in userCredential){
      toSubmit[key]=userCredential[key];
    }
    
    this._auth.realLogin(toSubmit).subscribe(res=>{
      this.loggingIn = false;
      console.log(res);
      
      if(res["success"]==false){
        if(res["message"]=="pending")
          this.message = "Request timed out. If you don't have the mobile application. Please download the application and try back again";
        else if(res["message"]=="denied")
          this.message = "You have denied the request.";
      }else{
        this._route.navigate(['/dashboard']);
      }
      
    },err=>{
      this.loggingIn = false;
      this.message = "Some error occurred. Please try later."
    },()=>{
      this.loggingIn = false;
      console.log("Completed");
    })

  }
}
