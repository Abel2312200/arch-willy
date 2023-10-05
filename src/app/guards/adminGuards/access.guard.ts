import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private appFacades : AppFacades , private router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!!this.appFacades.isLoggedIn()) return true;
      this.appFacades.alertError("Vous devez vous connecter !");
      return this.router.navigate(["/v1/login"]) ;

  }

}
