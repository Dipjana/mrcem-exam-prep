import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtabComponent } from './dashtab.component';

describe('DashtabComponent', () => {
  let component: DashtabComponent;
  let fixture: ComponentFixture<DashtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
