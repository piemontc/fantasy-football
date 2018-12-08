import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    IowaCubsComponent,
    TeamsComponent,
    HomeComponent,
    CreatePlayerComponent,
    PlayerStatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
