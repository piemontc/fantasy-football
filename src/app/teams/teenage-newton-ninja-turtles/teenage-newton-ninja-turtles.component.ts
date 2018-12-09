import { Component, OnInit } from '@angular/core';
import { PlayerStatsComponent } from 'src/app/models/player-stats/player-stats.component';
import { CreatePlayerComponent } from 'src/app/models/create-player/create-player.component';
import { GetPlayersService } from 'src/app/services/get-players.service';
import { of } from 'rxjs'

@Component({
  selector: 'app-teenage-newton-ninja-turtles',
  templateUrl: './teenage-newton-ninja-turtles.component.html',
  styleUrls: ['./teenage-newton-ninja-turtles.component.css']
})
export class TeenageNewtonNinjaTurtlesComponent implements OnInit {

  constructor(private getPlayersService: GetPlayersService) { }

  name = 'Teenage Newton Ninja Turtles'
  private roster = [
    'aaron-jones',
    'amari-cooper',
    'jeff-wilson',
    'tre-quan-smith',
    'dante-pettis',
    'cam-newton',
    'josh-adams',
    'keke-coutee',
    'curtis-samuel',
    'keenan-allen',
    'stefon-diggs',
    'david-njoku',
    'courtland-sutton',
    'corey-davis',
    'dallas-goedert',
    'rashaad-penny',
    'ronald-jones-ii',
    'chris-carson'
  ]
  private playerInfo = []
  private playerStatsMap: Map<any, PlayerStatsComponent> = new Map<any, PlayerStatsComponent>()
  private runningBacks = []
  private wideReceivers = []
  private teamInfo = {
    'name': 'Teenage Newton Ninja Turtles',
    'roster': this.roster,
    'rbs': this.runningBacks,
    'wrs': this.wideReceivers
  }

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
        } else if (playerInfo.position == 'WR' || playerInfo.position == 'TE') {
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
    return of(this.teamInfo)
  }
}