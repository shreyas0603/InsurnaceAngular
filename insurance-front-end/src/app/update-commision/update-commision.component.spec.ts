import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommisionComponent } from './update-commision.component';

describe('UpdateCommisionComponent', () => {
  let component: UpdateCommisionComponent;
  let fixture: ComponentFixture<UpdateCommisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCommisionComponent]
    });
    fixture = TestBed.createComponent(UpdateCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
