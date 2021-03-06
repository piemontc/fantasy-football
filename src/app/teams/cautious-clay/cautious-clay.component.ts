import { Component, OnInit } from '@angular/core';
import { GetPlayerInfoService } from 'src/app/services/get-player-info.service';
import { SortByStatsService } from 'src/app/services/sort-by-stats.service';

@Component({
  selector: 'app-cautious-clay',
  templateUrl: './cautious-clay.component.html',
  styleUrls: ['./cautious-clay.component.css']
})
export class CautiousClayComponent implements OnInit {

  constructor(private getPlayerInfoService: GetPlayerInfoService, private sortByStatsService: SortByStatsService) { }

  name = 'Cautious Clay'
  private playerInfo
  public playerStats

  ngOnInit() {
    this.getPlayerInfoService.createCautiousClayPlayerInfo()
    this.getPlayerInfoService.createCautiousClayStats()
    this.playerInfo = this.getPlayerInfoService.getCautiousClayPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getCautiousClayPlayerStats()
  }

  getRunningBacks() {
    this.playerInfo = this.getPlayerInfoService.getCautiousClayPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getCautiousClayPlayerStats()
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByPoints(runningBacks, this.playerStats)
  }

  getRunningBacksByYards() {
    this.playerInfo = this.getPlayerInfoService.getCautiousClayPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getCautiousClayPlayerStats()
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByRushYards(runningBacks, this.playerStats)
  }

  getWideReceivers() {
    this.playerInfo = this.getPlayerInfoService.getCautiousClayPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getCautiousClayPlayerStats()
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR" || player.position == "TE") {
        wideReceivers.push(player)
      }
    })
    return this.sortByStatsService.sortByPoints(wideReceivers, this.playerStats)
  }

  getInfo() {
    return this.playerInfo
  }
}
