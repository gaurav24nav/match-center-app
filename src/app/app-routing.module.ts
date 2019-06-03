import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path : "tournament",
    component : TournamentListComponent
  },
  {
    path : "match",
    loadChildren : "./match/match.module#MatchModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
