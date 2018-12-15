import { Component, OnInit } from '@angular/core';
import { CautiousClayComponent } from '../teams/cautious-clay/cautious-clay.component';
import { IowaCubsComponent } from '../teams/iowa-cubs/iowa-cubs.component';
import { TeenageNewtonNinjaTurtlesComponent } from '../teams/teenage-newton-ninja-turtles/teenage-newton-ninja-turtles.component';
import { GetPlayerInfoService } from '../services/get-player-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private getPlayerInfoService: GetPlayerInfoService,
    private cautiousClayComponent: CautiousClayComponent,
    private iowaCubsComponent: IowaCubsComponent,
    private tnntComponent: TeenageNewtonNinjaTurtlesComponent
  ) { }

  private icInfo
  private ccInfo
  private tnntInfo

  ngOnInit() {
    this.getPlayerInfoService.createIowaCubsPlayerInfo()
    this.getPlayerInfoService.createIowaCubsStats()
    this.getPlayerInfoService.createCautiousClayPlayerInfo()
    this.getPlayerInfoService.createCautiousClayStats()
    this.getPlayerInfoService.createTnntPlayerInfo()
    this.getPlayerInfoService.createTnntStats()
  }
}
