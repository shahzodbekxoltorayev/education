import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStaffComponent } from './other-staff.component';

describe('OtherStaffComponent', () => {
  let component: OtherStaffComponent;
  let fixture: ComponentFixture<OtherStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
