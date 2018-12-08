import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { getBootstrapListener } from '@angular/router/src/router_module';
import { CreatePlayerComponent } from 'src/app/models/create-player/create-player.component';

@Component({
  selector: 'app-iowa-cubs',
  templateUrl: './iowa-cubs.component.html',
  styleUrls: ['./iowa-cubs.component.css']
})
export class IowaCubsComponent implements OnInit {

  constructor(
    private getPlayersService: GetPlayersService
  ) { }

  name = 'Iowa Cubs'
  private iowaCubsRoster = [
    ['aaron', 'jones'],
    ['kerryon', 'johnson'],
    ['amari', 'cooper'],
    ['antonio', 'brown']
  ]
  private iowaCubsInfo = {
    'name': 'Iowa Cubs',
    'roster': this.iowaCubsRoster
  }
  private iowaCubsPlayerInfo = []

  ngOnInit() {
    this.getPlayerInfo()
  }

  getPlayerInfo() {
    this.iowaCubsRoster.forEach(player => {
      let playerInfo
      this.getPlayersService.getPlayerData(player[0], player[1])
      .subscribe(response => {
        playerInfo = new CreatePlayerComponent(
          response['players'][0]['first_name'],
          response['players'][0]['last_name'],
          response['teams'][0]['location'],
          response['teams'][0]['nickname'],
          response['players'][0]['position_abbreviation'],
          response['players'][0]['uniform_number'],
          response['players'][0]['years_of_experience']
        )
        this.iowaCubsPlayerInfo.push(playerInfo)
      })
    })
  }

  getTeamInfo() {
    return this.iowaCubsInfo
  }
}
