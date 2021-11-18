import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatQueueTableComponent } from './mat-queue-table.component';

describe('MaterialTableComponent', () => {
  let component: MatQueueTableComponent;
  let fixture: ComponentFixture<MatQueueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatQueueTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatQueueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
