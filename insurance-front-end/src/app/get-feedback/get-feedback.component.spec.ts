import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFeedbackComponent } from './get-feedback.component';

describe('GetFeedbackComponent', () => {
  let component: GetFeedbackComponent;
  let fixture: ComponentFixture<GetFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetFeedbackComponent]
    });
    fixture = TestBed.createComponent(GetFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
