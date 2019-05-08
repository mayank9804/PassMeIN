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
      this._route.navigate(['/login']);
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
