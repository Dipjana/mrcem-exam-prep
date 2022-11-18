import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
// import { User } from "src/app/model/user.model";
import { AuthService } from "src/app/service/auth/auth.service";
import { AppState } from "../app.state";
import { setLoadingSpinner } from "../shared/shared.action";
import { loginFail, loginStart, loginSucess, logOut } from "./auth.action";

@Injectable()
export  class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>,
      private router: Router){}

    login$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
              return this.authService
              .login(action.email, action.password)
              .pipe(map((data) => {
                console.log(data)
                // if(data){
                //   if(data.errors){
                //     this.store.dispatch(setLoadingSpinner({status: false}));
                  
                //     return loginFail({});
                //   }
                // }
                this.store.dispatch(setLoadingSpinner({status: false}));
                const user = this.authService.formatUser(data);
                this.authService.setUserInLocalStorage(user);
                return loginSucess({user});
              }),
              //  catchError((data) =>{ // if error responce not send in 404 this code not work
              //   console.log()
              //   return of()
              //  })
              ) 
            })
        )
    });

    loginRedirect$ = createEffect(
      ()=> {
        return this.actions$.pipe(
          ofType(loginSucess),
          tap((action) => {
            this.router.navigate(['/dashboard'])
          })
        );
      },
      {dispatch: false} // if i remove it's try to return some thing
    )

    logout$ = createEffect(()=>{
      return this.actions$.pipe(ofType(logOut), map(action =>{
this.authService.logOut();
this.router.navigate(['/dashboard/login'])
      }))
    },{
      dispatch: false
    })
}