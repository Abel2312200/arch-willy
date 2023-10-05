import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';

@Injectable({
  providedIn: 'root',
})
export class StaffRoleGuard implements CanActivate {
  constructor(private appFacades: AppFacades, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.appFacades.getUser().role_id == 1) return true;
    return this.router.navigate(['/dashboard/commandes']);
  }
}
