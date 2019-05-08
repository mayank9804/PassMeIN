import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CardService } from './card.service';


@Injectable()
export class CardResolverService implements Resolve<any>{
    constructor(private _cs: CardService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._cs.getcards();
    }


}