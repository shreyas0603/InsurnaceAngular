import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChangePasswordComponent } from './employee-change-password.component';

describe('EmployeeChangePasswordComponent', () => {
  let component: EmployeeChangePasswordComponent;
  let fixture: ComponentFixture<EmployeeChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeChangePasswordComponent]
    });
    fixture = TestBed.createComponent(EmployeeChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
