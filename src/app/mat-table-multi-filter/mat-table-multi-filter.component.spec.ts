import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableMultiFilterComponent } from './mat-table-multi-filter.component';

describe('MatTableMultiFilterComponent', () => {
  let component: MatTableMultiFilterComponent;
  let fixture: ComponentFixture<MatTableMultiFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableMultiFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableMultiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
