import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap, filter } from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CardService{
    private BASE_URL = environment.path;
    public filter:string="";
    constructor(private _http:HttpClient,private _router:Router){
        this.filter="";
    }
    public getcards(){
        let hiturl = `${this.BASE_URL}/card/fetch`;
        return this._http.get(hiturl).pipe(
            tap(res=>{}),
            catchError(err=>{
                throw err;
            })
        );
    }
    public addCard(card){
        console.log("hi");
        
        let hiturl = `${this.BASE_URL}/card/add`;
        console.log(hiturl);
        
        return this._http.post(hiturl,card).pipe(
            tap(res=>{
                console.log(res);
                
            }),
            catchError(err=>{
                throw err;
            })
        );
    }
    public updateCard(card,id){
        let newCard={
            id:id,
            card:card
        };
        let hiturl = `${this.BASE_URL}/card/update`;
        return this._http.post(hiturl,newCard).pipe(
            tap(res=>{}),
            catchError(err=>{
                throw err;
            })
        );
    }
    public deleteCard(id){
        let card={
            id:id
        };
        console.log(card);
        
        let hiturl = `${this.BASE_URL}/card/deletecard`;
        return this._http.post(hiturl,card).pipe(
            tap(res=>{}),
            catchError(err=>{
                throw err;
            })
        );
    }
}