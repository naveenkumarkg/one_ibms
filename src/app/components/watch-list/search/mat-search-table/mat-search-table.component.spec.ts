import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSearchTableComponent } from './mat-search-table.component';

describe('MaterialTableComponent', () => {
  let component: MatSearchTableComponent;
  let fixture: ComponentFixture<MatSearchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSearchTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
