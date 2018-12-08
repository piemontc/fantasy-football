import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IowaCubsComponent } from './iowa-cubs/iowa-cubs.component';

const routes: Routes = [
  {path: 'teams/iowacubs', component: IowaCubsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})

export class AppRoutingModule { }
