import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  constructor(
    public passingYards: number,
    public passhingTds: number,
    public rushingYards: number,
    public rushingTds: number,
    public receivingYards: number,
    public receivingTds: number
  ) { }

  ngOnInit() {
  }

}
