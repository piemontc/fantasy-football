import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CreatePlayerComponent } from '../models/create-player/create-player.component';
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators'

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

  getPlayerData(firstName: String, lastName: String): any {
    return this.http.get(`https://api.stattleship.com/football/nfl/players?player_id=nfl-${firstName}-${lastName}`, this.headers)
  }

  getAaronJones() {
    return this.getPlayerData("rashaad", "penny")
  }
}
