import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path : "",
    component : TournamentListComponent
  },
  {
    path : "match",
    loadChildren : "./match/match.module#MatchModule"
  },
  {
    path : 'statistics',
    component : StatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
