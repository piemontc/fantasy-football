import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../services/get-players.service';

@Component({
  selector: 'app-iowa-cubs',
  templateUrl: './iowa-cubs.component.html',
  styleUrls: ['./iowa-cubs.component.css']
})
export class IowaCubsComponent implements OnInit {

  constructor(private getPlayersService: GetPlayersService) { }

  ngOnInit() {
  }

  name = 'Iowa Cubs'

  roster = this.getPlayersService.getIowaCubsPlayersInfo()
}
