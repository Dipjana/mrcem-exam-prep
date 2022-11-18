import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ContactUsComponent
    }]),
  ]
})
export class ContactUsModule { }
