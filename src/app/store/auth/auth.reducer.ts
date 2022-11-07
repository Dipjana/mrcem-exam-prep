import { initialState } from "./auth.state";
import { createReducer, on } from '@ngrx/store';
import { loginFail, loginSucess } from "./auth.action";
import { setErrorMessage } from "../shared/shared.action";

const _authReducer = createReducer(initialState,
    on(loginSucess, (state, action) => {
        return{
            ...state,
            user: action.user,
        };
    }),on(loginFail, (state, action) =>{
        return{
            ...state,
            error: action
        }
    })
    )

export function AuthReducer(state:any, action:any) {
    return _authReducer(state, action);
}