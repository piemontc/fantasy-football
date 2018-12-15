import { Injectable } from '@angular/core';
import { CreatePlayerComponent } from '../models/create-player/create-player.component';
import { PlayerStatsComponent } from '../models/player-stats/player-stats.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPlayerInfoHelperService {

  constructor(private http: HttpClient) { }

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '74e2d7316b8d1ad810b77c5d64dbaf2a',
      'Accept': 'application/vnd.stattleship.com; version=1'
    })
  }

  getTwoDaysAgo() {
    let today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`
  }

  getPlayerData(slug: String) {
    return this.http.get(`https://api.stattleship.com/football/nfl/players?player_id=nfl-${slug}`, this.headers)
  }

  getPlayerSeasonStats(slug: String) {
    return this.http.get(`https://api.stattleship.com/football/nfl/player_season_stats?player_id=nfl-${slug}&on=${this.getTwoDaysAgo()}`, this.headers)
  }

  createPlayer(playerData): CreatePlayerComponent {
    return new CreatePlayerComponent(
      playerData['players'][0]['id'],
      playerData['players'][0]['slug'],
      playerData['players'][0]['first_name'],
      playerData['players'][0]['last_name'],
      playerData['teams'][0]['location'],
      playerData['teams'][0]['nickname'],
      playerData['players'][0]['position_abbreviation'],
      playerData['players'][0]['uniform_number'],
      playerData['players'][0]['years_of_experience']
    )
  }

  createStats(playerData) {
    let playerStats = new PlayerStatsComponent(
      playerData['player_season_stats'][0]['player_id'],
      playerData['player_season_stats'][0]['pass_yards'],
      playerData['player_season_stats'][0]['pass_touchdowns'],
      playerData['player_season_stats'][0]['rush_yards'],
      playerData['player_season_stats'][0]['rush_touchdowns'],
      playerData['player_season_stats'][0]['reception_yards'],
      playerData['player_season_stats'][0]['reception_touchdowns']
    )
    return (playerStats)
  }

  getPlayerId(playerData) {
    return playerData['player_season_stats'][0]['player_id']
  }
}
