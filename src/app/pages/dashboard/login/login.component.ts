import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from 'src/app/store/auth/auth.action';
import { AuthState } from 'src/app/store/auth/auth.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: any = FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store : Store<AuthState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('dipsundar_intermediate@test.com',[]),
      password: new FormControl('',[])
    });
  }

  onSubmit(){
const email = this.loginForm.value.email;
const password = this.loginForm.value.password;
this.store.dispatch(setLoadingSpinner({status: true}));
this.store.dispatch(loginStart({email, password}));
  }
}
