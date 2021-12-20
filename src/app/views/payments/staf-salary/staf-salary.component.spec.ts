import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafSalaryComponent } from './staf-salary.component';

describe('StafSalaryComponent', () => {
  let component: StafSalaryComponent;
  let fixture: ComponentFixture<StafSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StafSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
