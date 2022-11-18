import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME)

export const isAuthenticated = createSelector(getAuthState, (state) =>{
    console.log('aaa',state.user)
    return (!!state && !!state.user) ? !!state.user : !!localStorage.getItem("userData")
})