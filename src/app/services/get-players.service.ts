import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPlayersService {

  constructor() { }

  private iowaCubsRoster = [
    'Aaron Jones',
    'Kerryon Johnson',
    'Amari Cooper',
    'Antonio Brown',
    'D.J. Moore'
  ]

  getIowaCubsPlayersInfo(): String[] {
    return this.iowaCubsRoster
  }
}
