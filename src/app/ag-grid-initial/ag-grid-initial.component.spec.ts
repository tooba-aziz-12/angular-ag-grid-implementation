import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridInitialComponent } from './ag-grid-initial.component';

describe('AgGridInitialComponent', () => {
  let component: AgGridInitialComponent;
  let fixture: ComponentFixture<AgGridInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
