import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IowaCubsComponent } from './teams/iowa-cubs/iowa-cubs.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { CreatePlayerComponent } from './models/create-player/create-player.component';
import { PlayerStatsComponent } from './models/player-stats/player-stats.component';
import { MatSortModule, MatTableModule } from '@angular/material';
import { CautiousClayComponent } from './teams/cautious-clay/cautious-clay.component';
import { TeenageNewtonNinjaTurtlesComponent } from './teams/teenage-newton-ninja-turtles/teenage-newton-ninja-turtles.component';

@NgModule({
  declarations: [
    AppComponent,
    IowaCubsComponent,
    TeamsComponent,
    HomeComponent,
    CreatePlayerComponent,
    PlayerStatsComponent,
    CautiousClayComponent,
    TeenageNewtonNinjaTurtlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    CautiousClayComponent,
    IowaCubsComponent,
    TeenageNewtonNinjaTurtlesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
