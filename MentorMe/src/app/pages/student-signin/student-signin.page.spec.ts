import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSigninPage } from './student-signin.page';

describe('StudentSigninPage', () => {
  let component: StudentSigninPage;
  let fixture: ComponentFixture<StudentSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSigninPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
