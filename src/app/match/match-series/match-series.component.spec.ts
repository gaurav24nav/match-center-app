import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSeriesComponent } from './match-series.component';

describe('MatchSeriesComponent', () => {
  let component: MatchSeriesComponent;
  let fixture: ComponentFixture<MatchSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
