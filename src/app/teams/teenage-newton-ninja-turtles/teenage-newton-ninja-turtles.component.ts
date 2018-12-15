import { Component, OnInit } from '@angular/core';
import { GetPlayerInfoService } from 'src/app/services/get-player-info.service';
import { SortByStatsService } from 'src/app/services/sort-by-stats.service';

@Component({
  selector: 'app-teenage-newton-ninja-turtles',
  templateUrl: './teenage-newton-ninja-turtles.component.html',
  styleUrls: ['./teenage-newton-ninja-turtles.component.css']
})
export class TeenageNewtonNinjaTurtlesComponent implements OnInit {

  constructor(private getPlayerInfoService: GetPlayerInfoService, private sortByStatsService: SortByStatsService) { }

  name = 'Teenage Newton Ninja Turtles'
  private playerInfo
  private playerStats

  ngOnInit() {
    this.getPlayerInfoService.createTnntPlayerInfo()
    this.getPlayerInfoService.createTnntStats()
    this.playerInfo = this.getPlayerInfoService.getTnntPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getTnntPlayerStats()
  }

  getRunningBacks() {
    this.playerInfo = this.getPlayerInfoService.getTnntPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getTnntPlayerStats()
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByPoints(runningBacks, this.playerStats)
  }

  getWideReceivers() {
    this.playerInfo = this.getPlayerInfoService.getTnntPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getTnntPlayerStats()
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR" || player.position == "TE") {
        wideReceivers.push(player)
      }
    })
    return this.sortByStatsService.sortByPoints(wideReceivers, this.playerStats)
  }
}