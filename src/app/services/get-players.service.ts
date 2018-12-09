import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPlayersService {

  constructor(private http: HttpClient) { }

  private response
  private observable

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '74e2d7316b8d1ad810b77c5d64dbaf2a',
      'Accept': 'application/vnd.stattleship.com; version=1'
    })
  }

  getPlayerData(slug: String): any {
    return this.http.get(`https://api.stattleship.com/football/nfl/players?player_id=nfl-${slug}`, this.headers)
  }

  getPlayerSeasonStats(slug: String): any {
    return this.http.get(`https://api.stattleship.com/football/nfl/player_season_stats?player_id=nfl-${slug}&on=${this.getYesterdaysDate()}`, this.headers)
  }

  getYesterdaysDate() {
    let today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 2}`
  }
}
