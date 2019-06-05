import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchSeriesComponent } from './match-series/match-series.component';

const routes: Routes = [
  {
    path: 'details',
    component : MatchComponent
  },
  {
    path: '',
    component : MatchDetailsComponent
  },
  {
    path: 'series',
    component : MatchSeriesComponent
  }  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
