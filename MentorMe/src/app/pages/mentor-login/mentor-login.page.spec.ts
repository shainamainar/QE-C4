import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorLoginPage } from './mentor-login.page';

describe('MentorLoginPage', () => {
  let component: MentorLoginPage;
  let fixture: ComponentFixture<MentorLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
