import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTabQuestionsComponent } from './dash-tab-questions.component';

describe('DashTabQuestionsComponent', () => {
  let component: DashTabQuestionsComponent;
  let fixture: ComponentFixture<DashTabQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTabQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTabQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
