import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceAddComponent } from './science-add.component';

describe('ScienceAddComponent', () => {
  let component: ScienceAddComponent;
  let fixture: ComponentFixture<ScienceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
