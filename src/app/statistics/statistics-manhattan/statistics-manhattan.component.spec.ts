import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsManhattanComponent } from './statistics-manhattan.component';

describe('StatisticsManhattanComponent', () => {
  let component: StatisticsManhattanComponent;
  let fixture: ComponentFixture<StatisticsManhattanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsManhattanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsManhattanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
