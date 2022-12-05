import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/store/auth/auth.effect';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
 
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },

    ]),
    EffectsModule.forFeature([AuthEffects])
  ]

})
export class DashboardModule { }
