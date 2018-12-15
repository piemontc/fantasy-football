import { Component, OnInit } from '@angular/core';
import { CautiousClayComponent } from '../teams/cautious-clay/cautious-clay.component';
import { IowaCubsComponent } from '../teams/iowa-cubs/iowa-cubs.component';
import { TeenageNewtonNinjaTurtlesComponent } from '../teams/teenage-newton-ninja-turtles/teenage-newton-ninja-turtles.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cautiousClayComponent: CautiousClayComponent,
    private iowaCubsComponent: IowaCubsComponent,
    private tnntComponent: TeenageNewtonNinjaTurtlesComponent
  ) { }

  public players = {
    'quarterBacks': [],
    'runningBacks': [],
    'wideReceivers': []
  }

  ngOnInit() {
  }

}
