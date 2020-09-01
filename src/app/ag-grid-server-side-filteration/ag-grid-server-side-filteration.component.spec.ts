import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridServerSideFilterationComponent } from './ag-grid-server-side-filteration.component';

describe('AgGridServerSideFilterationComponent', () => {
  let component: AgGridServerSideFilterationComponent;
  let fixture: ComponentFixture<AgGridServerSideFilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridServerSideFilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridServerSideFilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
