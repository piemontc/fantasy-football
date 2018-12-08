import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IowaCubsComponent } from './teams/iowa-cubs/iowa-cubs.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/iowacubs', component: IowaCubsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})

export class AppRoutingModule { }
