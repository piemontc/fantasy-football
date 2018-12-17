import { Component, OnInit } from '@angular/core';
import { GetPlayerInfoService } from 'src/app/services/get-player-info.service';
import { SortByStatsService } from 'src/app/services/sort-by-stats.service';

@Component({
  selector: 'app-iowa-cubs',
  templateUrl: './iowa-cubs.component.html',
  styleUrls: ['./iowa-cubs.component.css']
})
export class IowaCubsComponent implements OnInit {

  constructor(private getPlayerInfoService: GetPlayerInfoService, private sortByStatsService: SortByStatsService) { }

  name = 'Iowa Cubs'
  private playerInfo
  public playerStats

  ngOnInit() {
    this.getPlayerInfoService.createIowaCubsPlayerInfo()
    this.getPlayerInfoService.createIowaCubsStats()
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
  }

  getRunningBacks() {
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByPoints(runningBacks, this.playerStats)
  }

  getRunningBacksByYards() {
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByRushYards(runningBacks, this.playerStats)
  }

  getRunningBacksByTds() {
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return this.sortByStatsService.sortByRushTds(runningBacks, this.playerStats)
  }

  getWideReceivers() {
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR" || player.position == "TE") {
        wideReceivers.push(player)
      }
    })
    return this.sortByStatsService.sortByPoints(wideReceivers, this.playerStats)
  }

  getWideReceiversByYards() {
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR" || player.position == "TE") {
        wideReceivers.push(player)
      }
    })
    return this.sortByStatsService.sortByReceivingYards(wideReceivers, this.playerStats)
  }

  getWideReceiversByTds() {
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR" || player.position == "TE") {
        wideReceivers.push(player)
      }
    })
    return this.sortByStatsService.sortByReceivingTds(wideReceivers, this.playerStats)
  }

  getStats() {
    this.playerInfo = this.getPlayerInfoService.getCautiousClayPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getCautiousClayPlayerStats()
    return this.playerStats
  }
}
