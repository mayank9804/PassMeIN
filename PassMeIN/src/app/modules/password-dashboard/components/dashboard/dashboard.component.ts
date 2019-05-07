import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  public logout(){
    this._authService.logout();
  }
}
