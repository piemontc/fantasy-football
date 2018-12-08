import { Injectable } from '@angular/core';
import { GetPlayersService } from './get-players.service';
import { IowaCubsComponent } from '../teams/iowa-cubs/iowa-cubs.component';

@Injectable({
  providedIn: 'root'
})
export class GetTeamsService {

  constructor(
    private getPlayers: GetPlayersService,
    private iowaCubs: IowaCubsComponent
    ) { }

  private iowaCubsInfo = this.iowaCubs.getTeamInfo
  private teams = [
    this.iowaCubsInfo
  ]
  
  getAllTeams() {
    return this.teams
  }

  getIowaCubs() {
    return this.iowaCubsInfo
  }
}
