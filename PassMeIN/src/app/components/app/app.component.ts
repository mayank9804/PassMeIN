import { Component, Renderer } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassMeIN';
  constructor(private _auth:AuthService,private renderer:Renderer){}
  
  ngDoCheck(){
    if(!this._auth.status()){
      window.scrollTo(0,0);
      
      this.renderer.setElementClass(document.body, 'stopy',true);
    }else{
      this.renderer.setElementClass(document.body, 'stopy',false);
    }
  }
}
