import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../../core/services/fakedata/fakedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public search:string;
  public username:string;
  public room:boolean;
  constructor(private _fd:FakedataService,private _router:Router) { }

  ngOnInit() {
    this.username = this._fd.provideUser()["username"];
  }
  ngDoCheck(){
    this.username = this._fd.provideUser()["username"];
    let curUrl  = this._router.url;
    this.room = (curUrl.split("/").length == 2);
  }
  public filter(){    
    this._fd.filter = this.search;
  }
}
