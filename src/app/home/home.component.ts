import { Component, OnInit } from '@angular/core';
import { CautiousClayComponent } from '../teams/cautious-clay/cautious-clay.component';
import { IowaCubsComponent } from '../teams/iowa-cubs/iowa-cubs.component';
import { TeenageNewtonNinjaTurtlesComponent } from '../teams/teenage-newton-ninja-turtles/teenage-newton-ninja-turtles.component';
import { GetPlayerInfoService } from '../services/get-player-info.service';
import { SortByStatsService } from '../services/sort-by-stats.service';

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
    private tnntComponent: TeenageNewtonNinjaTurtlesComponent,
    private sortByStatsService: SortByStatsService
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

  getMaxRbPoints(): any {
    let ccPlayer = this.cautiousClayComponent.getRunningBacks()[0]
    let icPlayer = this.iowaCubsComponent.getRunningBacks()[0]
    let tnntPlayer = this.tnntComponent.getRunningBacks()[0]

    let ccPlayerHolder = {
      info: ccPlayer,
      points: this.cautiousClayComponent.playerStats.get(ccPlayer.id).getPoints()
    }
    let icPlayerHolder = {
      info: icPlayer,
      points: this.iowaCubsComponent.playerStats.get(icPlayer.id).getPoints()
    }
    let tnntPlayerHolder = {
      info: tnntPlayer,
      points: this.tnntComponent.playerStats.get(tnntPlayer.id).getPoints()
    }

    let max = Math.max(ccPlayerHolder['points'], icPlayerHolder['points'], tnntPlayerHolder['points'])
    
    if(ccPlayerHolder['points'] == max) {
      return ccPlayerHolder
    } else if(icPlayerHolder['points'] == max) {
      return icPlayerHolder
    } else {
      return tnntPlayerHolder
    }
  }

  getMaxWrPoints(): any {
    let ccPlayer = this.cautiousClayComponent.getWideReceivers()[0]
    let icPlayer = this.iowaCubsComponent.getWideReceivers()[0]
    let tnntPlayer = this.tnntComponent.getWideReceivers()[0]

    let ccPlayerHolder = {
      info: ccPlayer,
      points: this.cautiousClayComponent.playerStats.get(ccPlayer.id).getPoints()
    }
    let icPlayerHolder = {
      info: icPlayer,
      points: this.iowaCubsComponent.playerStats.get(icPlayer.id).getPoints()
    }
    let tnntPlayerHolder = {
      info: tnntPlayer,
      points: this.tnntComponent.playerStats.get(tnntPlayer.id).getPoints()
    }

    let max = Math.max(ccPlayerHolder['points'], icPlayerHolder['points'], tnntPlayerHolder['points'])
    
    if(ccPlayerHolder['points'] == max) {
      return ccPlayerHolder
    } else if(icPlayerHolder['points'] == max) {
      return icPlayerHolder
    } else {
      return tnntPlayerHolder
    }
  }
}
