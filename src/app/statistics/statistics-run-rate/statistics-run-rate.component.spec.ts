import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsRunRateComponent } from './statistics-run-rate.component';

describe('StatisticsRunRateComponent', () => {
  let component: StatisticsRunRateComponent;
  let fixture: ComponentFixture<StatisticsRunRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsRunRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsRunRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
