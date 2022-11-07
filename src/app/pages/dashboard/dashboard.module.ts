import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AUTH_STATE_NAME } from 'src/app/store/auth/auth.selector';
import { AuthReducer } from 'src/app/store/auth/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/store/auth/auth.effect';
 
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent},
      {path: 'login', component: LoginComponent}
    ]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class DashboardModule { }
