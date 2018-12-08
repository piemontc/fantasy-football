import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IowaCubsComponent } from './iowa-cubs/iowa-cubs.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    IowaCubsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
