import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInsuranceTypeComponent } from './update-insurance-type.component';

describe('UpdateInsuranceTypeComponent', () => {
  let component: UpdateInsuranceTypeComponent;
  let fixture: ComponentFixture<UpdateInsuranceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInsuranceTypeComponent]
    });
    fixture = TestBed.createComponent(UpdateInsuranceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
