import { Component, OnInit } from '@angular/core';
import { IowaCubsComponent } from '../teams/iowa-cubs/iowa-cubs.component';
import { CautiousClayComponent } from '../teams/cautious-clay/cautious-clay.component';
import { TeenageNewtonNinjaTurtlesComponent } from '../teams/teenage-newton-ninja-turtles/teenage-newton-ninja-turtles.component';
import { GetPlayerInfoService } from '../services/get-player-info.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(
    private getPlayerInfoService: GetPlayerInfoService,
    private iowaCubsComponent: IowaCubsComponent,
    private cautiousClayComponent: CautiousClayComponent,
    private tnntComponent: TeenageNewtonNinjaTurtlesComponent
  ) { }

  ngOnInit() {
    this.getPlayerInfoService.createIowaCubsPlayerInfo()
    this.getPlayerInfoService.createIowaCubsStats()
    this.getPlayerInfoService.createCautiousClayPlayerInfo()
    this.getPlayerInfoService.createCautiousClayStats()
    this.getPlayerInfoService.createTnntPlayerInfo()
    this.getPlayerInfoService.createTnntStats()
  }

  getIowaCubsRushYardLeaders(): any {
    let p1 = this.iowaCubsComponent.getRunningBacksByYards()[0]
    let p2 = this.iowaCubsComponent.getRunningBacksByYards()[1]
    let p3 = this.iowaCubsComponent.getRunningBacksByYards()[2]

    let p1Holder = {
      info: p1,
      total: this.iowaCubsComponent.playerStats.get(p1.id).rushingYards
    }
    let p2Holder = {
      info: p2,
      total: this.iowaCubsComponent.playerStats.get(p2.id).rushingYards
    }
    let p3Holder = {
      info: p3,
      total: this.iowaCubsComponent.playerStats.get(p3.id).rushingYards
    }

    return [p1Holder, p2Holder, p3Holder]
  }

  getIowaCubsRushTdLeaders(): any {
    let p1 = this.iowaCubsComponent.getRunningBacksByTds()[0]
    let p2 = this.iowaCubsComponent.getRunningBacksByTds()[1]
    let p3 = this.iowaCubsComponent.getRunningBacksByTds()[2]

    let p1Holder = {
      info: p1,
      total: this.iowaCubsComponent.playerStats.get(p1.id).rushingTds
    }
    let p2Holder = {
      info: p2,
      total: this.iowaCubsComponent.playerStats.get(p2.id).rushingTds
    }
    let p3Holder = {
      info: p3,
      total: this.iowaCubsComponent.playerStats.get(p3.id).rushingTds
    }

    return [p1Holder, p2Holder, p3Holder]
  }

  getIowaCubsReceivingYardLeaders(): any {
    let p1 = this.iowaCubsComponent.getWideReceiversByYards()[0]
    let p2 = this.iowaCubsComponent.getWideReceiversByYards()[1]
    let p3 = this.iowaCubsComponent.getWideReceiversByYards()[2]

    let p1Holder = {
      info: p1,
      total: this.iowaCubsComponent.playerStats.get(p1.id).receivingYards
    }
    let p2Holder = {
      info: p2,
      total: this.iowaCubsComponent.playerStats.get(p2.id).receivingYards
    }
    let p3Holder = {
      info: p3,
      total: this.iowaCubsComponent.playerStats.get(p3.id).receivingYards
    }

    return [p1Holder, p2Holder, p3Holder]
  }

  getIowaCubsReceivingTdLeaders(): any {
    let p1 = this.iowaCubsComponent.getWideReceiversByTds()[0]
    let p2 = this.iowaCubsComponent.getWideReceiversByTds()[1]
    let p3 = this.iowaCubsComponent.getWideReceiversByTds()[2]

    let p1Holder = {
      info: p1,
      total: this.iowaCubsComponent.playerStats.get(p1.id).receivingTds
    }
    let p2Holder = {
      info: p2,
      total: this.iowaCubsComponent.playerStats.get(p2.id).receivingTds
    }
    let p3Holder = {
      info: p3,
      total: this.iowaCubsComponent.playerStats.get(p3.id).receivingTds
    }

    return [p1Holder, p2Holder, p3Holder]
  }
}
