import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGraduateComponent } from './group-graduate.component';

describe('GroupGraduateComponent', () => {
  let component: GroupGraduateComponent;
  let fixture: ComponentFixture<GroupGraduateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupGraduateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
