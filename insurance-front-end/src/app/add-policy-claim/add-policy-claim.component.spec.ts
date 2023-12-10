import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolicyClaimComponent } from './add-policy-claim.component';

describe('AddPolicyClaimComponent', () => {
  let component: AddPolicyClaimComponent;
  let fixture: ComponentFixture<AddPolicyClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPolicyClaimComponent]
    });
    fixture = TestBed.createComponent(AddPolicyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
