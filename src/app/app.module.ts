import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsManhattanComponent } from './statistics/statistics-manhattan/statistics-manhattan.component';
import { StatisticsRunRateComponent } from './statistics/statistics-run-rate/statistics-run-rate.component';
import { StatisticsWormComponent } from './statistics/statistics-worm/statistics-worm.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentListComponent,
    ProfileComponent,
    StatisticsComponent,
    StatisticsManhattanComponent,
    StatisticsRunRateComponent,
    StatisticsWormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
