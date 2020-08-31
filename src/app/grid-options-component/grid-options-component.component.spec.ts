import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOptionsComponentComponent } from './grid-options-component.component';

describe('GridOptionsComponentComponent', () => {
  let component: GridOptionsComponentComponent;
  let fixture: ComponentFixture<GridOptionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOptionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
