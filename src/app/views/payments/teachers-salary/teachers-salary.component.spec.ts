import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersSalaryComponent } from './teachers-salary.component';

describe('TeachersSalaryComponent', () => {
  let component: TeachersSalaryComponent;
  let fixture: ComponentFixture<TeachersSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
