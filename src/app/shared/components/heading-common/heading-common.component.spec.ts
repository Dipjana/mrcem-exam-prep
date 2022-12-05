import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingCommonComponent } from './heading-common.component';

describe('HeadingCommonComponent', () => {
  let component: HeadingCommonComponent;
  let fixture: ComponentFixture<HeadingCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
