import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSigninPage } from './mentor-signin.page';

describe('MentorSigninPage', () => {
  let component: MentorSigninPage;
  let fixture: ComponentFixture<MentorSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSigninPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
