import { Injectable } from '@angular/core';
import { GetPlayerInfoHelperService } from './get-player-info-helper.service';
import { PlayerStatsComponent } from '../models/player-stats/player-stats.component';

@Injectable({
  providedIn: 'root'
})
export class GetPlayerInfoService {

  constructor(private getPlayerInfoHelperService: GetPlayerInfoHelperService) { }

  private iowaCubsPlayerInfo = []
  private iowaCubsPlayerStats: Map<string, PlayerStatsComponent> = new Map()
  private cautiousClayPlayerInfo = []
  private cautiousClayPlayerStats: Map<string, PlayerStatsComponent> = new Map()
  private tnntPlayerInfo = []
  private tnntPlayerStats: Map<string, PlayerStatsComponent> = new Map()
  private iowaCubsRoster = [
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
    //'alex-smith',
    'josh-doctson',
    'ian-thomas',
    'damien-williams',
    'paul-richardson',
    'jonnu-smith'
    //'cody-kessler'
  ]
  private cautiousClayRoster = [
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
  private tnntRoster = [
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

  createIowaCubsPlayerInfo() {
    if (this.iowaCubsPlayerInfo.length == 0) {
      this.iowaCubsRoster.forEach(player => {
        this.getPlayerInfoHelperService.getPlayerData(player).subscribe(playerData => {
          this.iowaCubsPlayerInfo.push(this.getPlayerInfoHelperService.createPlayer(playerData))
        })
      })
    }
  }

  createIowaCubsStats() {
    if (this.iowaCubsPlayerStats.size == 0) {
      this.iowaCubsRoster.forEach(player => {
        this.getPlayerInfoHelperService.getPlayerSeasonStats(player).subscribe(playerData => {
          this.iowaCubsPlayerStats.set(this.getPlayerInfoHelperService.getPlayerId(playerData), this.getPlayerInfoHelperService.createStats(playerData))
        })
      })
    }
  }

  createCautiousClayPlayerInfo() {
    if (this.cautiousClayPlayerInfo.length == 0) {
      this.cautiousClayRoster.forEach(player => {
        this.getPlayerInfoHelperService.getPlayerData(player).subscribe(playerData => {
          this.cautiousClayPlayerInfo.push(this.getPlayerInfoHelperService.createPlayer(playerData))
        })
      })
    }
  }

  createCautiousClayStats() {
    if (this.cautiousClayPlayerStats.size == 0) {
      this.cautiousClayRoster.forEach(player => {
        this.getPlayerInfoHelperService.getPlayerSeasonStats(player).subscribe(playerData => {
          this.cautiousClayPlayerStats.set(this.getPlayerInfoHelperService.getPlayerId(playerData), this.getPlayerInfoHelperService.createStats(playerData))
        })
      })
    }
  }

  createTnntPlayerInfo() {
    if (this.tnntPlayerInfo.length == 0) {
      this.tnntRoster.forEach(player => {
        this.getPlayerInfoHelperService.getPlayerData(player).subscribe(playerData => {
          this.tnntPlayerInfo.push(this.getPlayerInfoHelperService.createPlayer(playerData))
        })
      })
    }
  }

  createTnntStats() {
    if (this.tnntPlayerStats.size == 0) {
      this.tnntRoster.forEach(player => {
        this.getPlayerInfoHelperService.getPlayerSeasonStats(player).subscribe(playerData => {
          this.tnntPlayerStats.set(this.getPlayerInfoHelperService.getPlayerId(playerData), this.getPlayerInfoHelperService.createStats(playerData))
        })
      })
    }
  }

  getIowaCubsPlayerInfo() {
    return this.iowaCubsPlayerInfo
  }

  getIowaCubsPlayerStats() {
    return this.iowaCubsPlayerStats
  }

  getCautiousClayPlayerInfo() {
    return this.cautiousClayPlayerInfo
  }

  getCautiousClayPlayerStats() {
    return this.cautiousClayPlayerStats
  }

  getTnntPlayerInfo() {
    return this.tnntPlayerInfo
  }

  getTnntPlayerStats() {
    return this.tnntPlayerStats
  }
}
