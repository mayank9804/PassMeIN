import { Component, OnInit } from '@angular/core';
import { FakedataService } from 'src/app/modules/core/services/fakedata/fakedata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _fd:FakedataService) { }
  public user:any=[];
  
  ngOnInit() {
    Object.assign(this.user,this._fd.provideUser());  
  }
  
  public updateProfile(updatedUser:any){
    for(let x in  updatedUser){
      this.user[x]=updatedUser[x];
    }
    this._fd.updateUser(updatedUser);
  }
}
