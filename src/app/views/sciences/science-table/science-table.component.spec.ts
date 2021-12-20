import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceTableComponent } from './science-table.component';

describe('ScienceTableComponent', () => {
  let component: ScienceTableComponent;
  let fixture: ComponentFixture<ScienceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
