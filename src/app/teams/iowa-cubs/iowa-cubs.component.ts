import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { CreatePlayerComponent } from 'src/app/models/create-player/create-player.component';
import { PlayerStatsComponent } from 'src/app/models/player-stats/player-stats.component';

@Component({
  selector: 'app-iowa-cubs',
  templateUrl: './iowa-cubs.component.html',
  styleUrls: ['./iowa-cubs.component.css']
})
export class IowaCubsComponent implements OnInit {

  constructor(
    private getPlayersService: GetPlayersService
  ) { }

  private noVal = 0
  name = 'Iowa Cubs'
  private roster = [
    'aaron-jones',
    'kerryon-johnson',
    'amari-cooper',
    'antonio-brown',
    'd-j-moore-1997-04-14',
    'jeff-wilson',
    'justin-jackson-1996-04-22',
    'c-j-anderson',
    'rashaad-penny',
    'doug-baldwin',
    'tre-quan-smith',
    'dante-pettis',
    'daesean-hamilton',
    'marquez-valdes-scantling',
    'ben-roethlisberger',
    'vance-mcdonald',
    'alex-smith',
    'josh-doctson',
    'ian-thomas',
    'damien-williams',
    'paul-richardson',
    'jonnu-smith',
    'cody-kessler'
  ]
  private iowaCubsInfo = {
    'name': 'Iowa Cubs',
    'roster': this.roster
  }
  private playerInfo = []
  private playerStatsMap: Map<any, PlayerStatsComponent> = new Map<any, PlayerStatsComponent>()
  private runningBacks = []
  private wideReceivers = []

  ngOnInit() {
    this.getPlayerInfo()
    this.getPlayerSeasonStats()
  }

  getPlayerInfo() {
    this.roster.forEach(player => {
      let playerInfo
      this.getPlayersService.getPlayerData(player)
      .subscribe(response => {
        playerInfo = new CreatePlayerComponent(
          response['players'][0]['id'],
          response['players'][0]['first_name'],
          response['players'][0]['last_name'],
          response['teams'][0]['location'],
          response['teams'][0]['nickname'],
          response['players'][0]['position_abbreviation'],
          response['players'][0]['uniform_number'],
          response['players'][0]['years_of_experience']
        )
        this.playerInfo.push(playerInfo)
        if (playerInfo.position == 'RB') {
          this.runningBacks.push(playerInfo)
        } else if (playerInfo.position == 'WR') {
          this.wideReceivers.push(playerInfo)
        }
      })
    })
  }

  getPlayerSeasonStats() {
    this.roster.forEach(player => {
      let playerStats
      this.getPlayersService.getPlayerSeasonStats(player)
      .subscribe(response => {
        playerStats = new PlayerStatsComponent(
          response['player_season_stats'][0]['pass_yards'],
          response['player_season_stats'][0]['pass_touchdowns'],
          response['player_season_stats'][0]['rush_yards'],
          response['player_season_stats'][0]['rush_touchdowns'],
          response['player_season_stats'][0]['reception_yards'],
          response['player_season_stats'][0]['reception_touchdowns']
        )
        if (playerStats.rushingYards == 0 || playerStats.rushingYards == null) {
          playerStats.rushingYards = 0
        }
        if (playerStats.rushingTds == 0 || playerStats.rushingTds == null) {
          playerStats.rushingTds = 0
        }
        if (playerStats.receivingYards == 0 || playerStats.receivingYards == null) {
          playerStats.rushingYards = 0
        }
        if (playerStats.receivingTds == 0 || playerStats.receivingTds == null) {
          playerStats.rushingTds = 0
        }
        this.playerStatsMap.set(response['player_season_stats'][0]['player_id'], playerStats)
      })
    })
  }

  getTeamInfo() {
    return this.iowaCubsInfo
  }
}
