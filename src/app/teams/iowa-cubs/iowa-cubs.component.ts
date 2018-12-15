import { Component, OnInit } from '@angular/core';
import { GetPlayerInfoService } from 'src/app/services/get-player-info.service';

@Component({
  selector: 'app-iowa-cubs',
  templateUrl: './iowa-cubs.component.html',
  styleUrls: ['./iowa-cubs.component.css']
})
export class IowaCubsComponent implements OnInit {

  constructor(private getPlayerInfoService: GetPlayerInfoService) { }

  name = 'Iowa Cubs'
  private playerInfo
  private playerStats

  ngOnInit() {
    this.getPlayerInfoService.createIowaCubsPlayerInfo()
    this.getPlayerInfoService.createIowaCubsStats()
    this.playerInfo = this.getPlayerInfoService.getIowaCubsPlayerInfo()
    this.playerStats = this.getPlayerInfoService.getIowaCubsPlayerStats()
  }

  getRunningBacks() {
    let runningBacks = []
    this.playerInfo.forEach(player => {
      if (player.position == "RB") {
        runningBacks.push(player)
      }
    })
    return runningBacks
  }

  getWideReceivers() {
    let wideReceivers = []
    this.playerInfo.forEach(player => {
      if (player.position == "WR") {
        wideReceivers.push(player)
      }
    })
    return wideReceivers
  }
}
