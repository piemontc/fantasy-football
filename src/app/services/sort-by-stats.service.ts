import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortByStatsService {

  constructor() { }

  sortByPoints(players, playerStats) {
    var len = players.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (playerStats.get(players[j].id).getPoints() > playerStats.get(players[j_min].id).getPoints()) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(players, i, j_min);
      } else {}
    }
    return players
  }

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

  sortByRushTds(players, playerStats) {
    var len = players.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (playerStats.get(players[j].id).rushingTds > playerStats.get(players[j_min].id).rushingTds) {
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

  sortByReceivingTds(players, playerStats) {
    var len = players.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (playerStats.get(players[j].id).receivingTds > playerStats.get(players[j_min].id).receivingTds) {
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
