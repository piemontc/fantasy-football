import { Component, OnInit } from '@angular/core';
import { GetPlayerInfoService } from 'src/app/services/get-player-info.service';

@Component({
  selector: 'app-teenage-newton-ninja-turtles',
  templateUrl: './teenage-newton-ninja-turtles.component.html',
  styleUrls: ['./teenage-newton-ninja-turtles.component.css']
})
export class TeenageNewtonNinjaTurtlesComponent implements OnInit {

  constructor(private getPlayerInfoService: GetPlayerInfoService) { }

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