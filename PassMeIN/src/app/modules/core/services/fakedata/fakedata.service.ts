import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {
  filter:string;
  card:any=[
    {
      "site-name":"Facebook",
      "url":"https://www.facebook.com",
      "password":"password",
      "username":"facebook246",
      "email":"mayank246@gmail.com",
      "notes":"Facebook password",
      "active":true,
      "id":1
    },
    {
      "site-name":"Twitter",
      "url":"https://www.twitter.com",
      "password":"password",
      "username":"twitter246",
      "email":"mayank246@gmail.com",
      "notes":"Twitter password",
      "active":true,
      "id":2
    },
    {
      "site-name":"LinkedIn",
      "url":"https://www.linkedin.com",
      "password":"password",
      "username":"linkedin246",
      "email":"mayank246@gmail.com",
      "notes":"LinkedIn password",
      "active":true,
      "id":3
    },
    {
      "site-name":"Gmail",
      "url":"https://www.gmail.com",
      "password":"password",
      "username":"gmail246",
      "email":"mayank246@gmail.com",
      "notes":"Gmail password",
      "active":true,
      "id":4
    },
    {
      "site-name":"Twillio",
      "url":"https://www.twillio.com",
      "password":"password",
      "username":"twillio246",
      "email":"mayank246@gmail.com",
      "notes":"Twillio password",
      "active":true,
      "id":5
    }
  ]
  user:any={
    "fname":"Lucky",
    "lname":"Jessica",
    "email":"luckyjessica21@passmein.com",
    "phone":9814670363,
    "address":"21, Birmingham, England",
    "_id":"287198127161",
    "username":"Jessica"
  }

  constructor() { 
    this.filter = "";
  }
  public populateCards():any{
    return this.card;
  }
  public deleteCard(id:number){
    this.card.forEach(x => {
      if(x['id']==id){
        x.active = false;
      }
    });
  }
  public updateUser(updatedUser:any){
    this.user = updatedUser;
  }
  public provideUser():any{
    return this.user;
  }
  public addCard(newCard:any){
    newCard["id"]=this.card[this.card.length-1]['id']+1;
    newCard["active"]=true;
    this.card.push(newCard);
  }


  public updateCard(updatedCard:any,id:number){
    this.card.forEach(x => {
      if(x['id']==id){
        Object.assign(x,updatedCard);
      }
    });
  }
}
