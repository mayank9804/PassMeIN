import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _role: string = "";
  private TOKEN_KEY: string = 'token';
  private BASE_URL: string = environment.path;
  constructor(private _route: Router, private _http: HttpClient) { }

  ngOnInit() {

  }

  public saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public deleteToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  public status() {
    // console.log(!!localStorage.getItem(this.TOKEN_KEY));
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  public role() {
    return this._role;
  }

  public realLogin(toSubmit: any) {
    let hiturl = `${this.BASE_URL}/login`;
    return this._http.post(hiturl, toSubmit).pipe(
      tap(res => {
        this.saveToken(res['token']);
      }),
      catchError(err => {
        throw err;
      })
    )
  }

  public logout(): void {
    this.deleteToken();
    this._route.navigate(['/']);
  }
  public getToken(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  public registerUser(toSubmit: any) {
    let hiturl = `${this.BASE_URL}/register`;
    return this._http.post(hiturl, toSubmit).pipe(
      tap(res => {}),
      catchError(err => {
        throw err;
      })
    )
  }
}
