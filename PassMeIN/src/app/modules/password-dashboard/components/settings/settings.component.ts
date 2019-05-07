import { Component, OnInit } from '@angular/core';
import { FakedataService } from 'src/app/modules/core/services/fakedata/fakedata.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _fd:FakedataService) { }
  public user:any=[];
  
  ngOnInit() {
    Object.assign(this.user,this._fd.provideUser());  
  }
  
  public updatePhoneNumber(){
    this._fd.updateUser(this.user);
  }

  public updateEmail(){
    this._fd.updateUser(this.user);
  }

}
