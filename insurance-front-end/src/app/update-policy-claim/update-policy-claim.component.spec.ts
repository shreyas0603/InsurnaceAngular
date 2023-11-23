import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePolicyClaimComponent } from './update-policy-claim.component';

describe('UpdatePolicyClaimComponent', () => {
  let component: UpdatePolicyClaimComponent;
  let fixture: ComponentFixture<UpdatePolicyClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePolicyClaimComponent]
    });
    fixture = TestBed.createComponent(UpdatePolicyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
