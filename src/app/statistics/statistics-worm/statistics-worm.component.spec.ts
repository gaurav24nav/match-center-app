import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsWormComponent } from './statistics-worm.component';

describe('StatisticsWormComponent', () => {
  let component: StatisticsWormComponent;
  let fixture: ComponentFixture<StatisticsWormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsWormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsWormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
