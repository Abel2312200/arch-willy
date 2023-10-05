import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
  providedIn : 'root'
})

export class ShoppingResolverService implements Resolve<any> {
  constructor(private router : Router ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const routerExtrasData = this.router.getCurrentNavigation()?.extras.state;
    if(!!routerExtrasData) return routerExtrasData
    return this.router.navigate(["/Shop/list"]);
  }


}
