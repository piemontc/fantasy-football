import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerStatsComponent } from 'src/app/models/player-stats/player-stats.component';
import { CreatePlayerComponent } from 'src/app/models/create-player/create-player.component';
import { GetPlayersService } from 'src/app/services/get-players.service';

@Component({
  selector: 'app-cautious-clay',
  templateUrl: './cautious-clay.component.html',
  styleUrls: ['./cautious-clay.component.css']
})
export class CautiousClayComponent implements OnInit {

  constructor(private getPlayersService: GetPlayersService) { }

  name = 'Cautious Clay'
  private roster = [
    'aaron-jones',
    'amari-cooper',
    'jeff-wilson',
    'tre-quan-smith',
    'dante-pettis',
    'cam-newton',
    'saquon-barkley',
    'josh-gordon',
    'evan-engram',
    'sony-michel',
    'a-j-green',
    'anthony-miller-1995-10-09',
    'christian-kirk',
    'sam-darnold',
    'josh-adams',
    'keke-coutee',
    'curtis-samuel',
    'gus-edwards',
    //'derrius-guice',
    'o-j-howard'
  ]
  private teamInfo = {
    'name': 'Cautious Clay',
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
    return this.teamInfo
  }
}