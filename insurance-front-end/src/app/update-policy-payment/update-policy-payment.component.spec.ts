import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePolicyPaymentComponent } from './update-policy-payment.component';

describe('UpdatePolicyPaymentComponent', () => {
  let component: UpdatePolicyPaymentComponent;
  let fixture: ComponentFixture<UpdatePolicyPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePolicyPaymentComponent]
    });
    fixture = TestBed.createComponent(UpdatePolicyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
