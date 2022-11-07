import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of } from "rxjs";
// import { User } from "src/app/model/user.model";
import { AuthService } from "src/app/service/auth/auth.service";
import { AppState } from "../app.state";
import { setLoadingSpinner } from "../shared/shared.action";
import { loginFail, loginStart, loginSucess } from "./auth.action";

@Injectable()
export  class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>){}

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
                return loginSucess({user});
              }),
              //  catchError((data) =>{
              //   console.log()
              //   return of()
              //  })
              ) 
            })
        )
    })
}