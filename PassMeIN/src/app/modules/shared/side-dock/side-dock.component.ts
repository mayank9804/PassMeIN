import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-side-dock',
  templateUrl: './side-dock.component.html',
  styleUrls: ['./side-dock.component.css']
})
export class SideDockComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }
  public logout(){
    this._authService.logout();
  }
}
