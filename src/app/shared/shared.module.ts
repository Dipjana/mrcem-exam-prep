import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { NavitemComponent } from './components/navitem/navitem.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import { AppHeroComponent } from './components/app-hero/app-hero.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
  
    LoadingSpinnerComponent,
       NavbarComponent,
       DashboardNavComponent,
       NavitemComponent,
       HomecontentComponent,
       AppHeroComponent,
       FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ LoadingSpinnerComponent, NavbarComponent, DashboardNavComponent, NavitemComponent, HomecontentComponent, AppHeroComponent, FooterComponent],
})
export class SharedModule { }
