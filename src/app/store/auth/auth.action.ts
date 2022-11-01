import { createAction, props } from '@ngrx/store';
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login sucess';
export const LOGIN_FAIL = '[auth page] login fail';

export const loginStart = createAction(
    LOGIN_START,
    props<{email:string; password:string}>()
)

export const loginSucess = createAction(LOGIN_SUCCESS);