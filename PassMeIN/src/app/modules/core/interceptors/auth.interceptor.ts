import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpEventType } from "@angular/common/http";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector, private _route: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authReq = req;
        if (this.injector.get(AuthService).getToken()) {
            authReq = req.clone({
                headers: req.headers.set('authorization', this.injector.get(AuthService).getToken())
            })
        }

        return next.handle(authReq).pipe(
            // This would handle unauthorized access!
            tap(() => { }, err => {
                if (err.status == 401) {
                    this._route.navigate(['/login']);
                }
            })
        );

    }
}