import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortByStatsService {

  constructor() { }

  sortByRushYards(players, playerStats) {
    var len = players.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (playerStats.get(players[j].id).rushingYards > playerStats.get(players[j_min].id).rushingYards) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(players, i, j_min);
      } else {}
    }
    return players
  }

  sortByReceivingYards(players, playerStats) {
    var len = players.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (playerStats.get(players[j].id).receivingYards > playerStats.get(players[j_min].id).receivingYards) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(players, i, j_min);
      } else {}
    }
    return players
  }

  swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
  }
}
