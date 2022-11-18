import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { exhaustMap, map, Observable, tap } from 'rxjs';
import { AppState } from '../store/app.state';
import { isAuthenticated } from '../store/auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private store: Store<AppState>, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.store.select(isAuthenticated).pipe(map((authenticate) => {
// if(!authenticate){
// return this.router.createUrlTree(['/dashboard'])
// }
// return true;
//     }))

return this.store.pipe(select(isAuthenticated), tap( (authenticate) =>{
  if(!authenticate){
this.router.navigate(['/dashboard/login']
// ,{queryParams: {returnUrl: state.url},}
)
  }
}))
    
  }
  
}
