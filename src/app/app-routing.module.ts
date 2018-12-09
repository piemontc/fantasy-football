import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IowaCubsComponent } from './teams/iowa-cubs/iowa-cubs.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { CautiousClayComponent } from './teams/cautious-clay/cautious-clay.component';
import { TeenageNewtonNinjaTurtlesComponent } from './teams/teenage-newton-ninja-turtles/teenage-newton-ninja-turtles.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/iowacubs', component: IowaCubsComponent},
  {path: 'teams/cautiousclay', component: CautiousClayComponent},
  {path: 'teams/tnnt', component: TeenageNewtonNinjaTurtlesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})

export class AppRoutingModule { }
