import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HeroLoginGuard implements CanActivate {
  
  constructor(private _authService:AuthService,private _route:Router){}
  
  canActivate(): boolean {

    if(!this._authService.status()){
      return true;
    }else{
      // navigate to dashboard module
      this._route.navigate(['/dashboard']);
      return false;
    }
    
  }
  
}
