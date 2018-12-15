import { Component } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent {

  constructor(
    public playerId: String,
    public passingYards: number,
    public passhingTds: number,
    public rushingYards: number,
    public rushingTds: number,
    public receivingYards: number,
    public receivingTds: number
  ) { }
}
