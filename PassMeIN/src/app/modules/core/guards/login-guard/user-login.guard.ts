import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {
  
  constructor(private _authService:AuthService,private _route:Router){}
  
  canActivate(): boolean {
    console.log(this._authService.status(), this._authService.role());
    
    if(this._authService.status() ){
      return true;
    }else{
        // Navigate back to Hero page
        this._route.navigate(['/']);
        return false;
    }
    
  }
  
}
