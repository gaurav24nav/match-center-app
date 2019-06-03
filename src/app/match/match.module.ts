import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchSeriesComponent } from './match-series/match-series.component';

@NgModule({
  declarations: [MatchComponent, MatchDetailsComponent, MatchSeriesComponent],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
