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
  private playerStats

  ngOnInit() {
    this.getPlayerInfoService.createCautiousClayPlayerInfo()
    this.getPlayerInfoService.createCautiousClayStats()
    this.playerInfo = this.getPlayerInfoService.getCautiousClayPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getCautiousClayPlayerStats()
  }

  getRunningBacks() {
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByRushYards(runningBacks, this.playerStats)
  }

  getWideReceivers() {
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR" || player.position == "TE") {
        wideReceivers.push(player)
      }
    })
    return this.sortByStatsService.sortByReceivingYards(wideReceivers, this.playerStats)
  }
}
