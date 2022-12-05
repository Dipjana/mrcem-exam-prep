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
import { DoughnutchartComponent } from './components/doughnutchart/doughnutchart.component';
import { PerformancechartComponent } from './components/performancechart/performancechart.component';
import { DashtabComponent } from './components/dashtab/dashtab.component';
import { DashTabQuestionsComponent } from './components/dash-tab-questions/dash-tab-questions.component';
import { ScorechartComponent } from './components/scorechart/scorechart.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { GuideComponent } from './components/guide/guide.component';
import { HeadingCommonComponent } from './components/heading-common/heading-common.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const components = [
  LoadingSpinnerComponent,
  NavbarComponent,
  DashboardNavComponent,
  NavitemComponent,
  HomecontentComponent,
  AppHeroComponent,
  FooterComponent,
  DoughnutchartComponent,
  PerformancechartComponent,
  DashtabComponent,
  DashTabQuestionsComponent,
  ScorechartComponent,
  CountDownComponent,
  GuideComponent,
  HeadingCommonComponent,
  TestimonialComponent, 
  ScorechartComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...components ],
})
export class SharedModule { }
