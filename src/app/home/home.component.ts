import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../services/get-players.service';
import { CreatePlayerComponent } from '../models/create-player/create-player.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getPlayers: GetPlayersService) { }

  private aaronJones

  ngOnInit() {
    this.getPlayers.getAaronJones()
    .subscribe(response => {
      this.aaronJones = new CreatePlayerComponent(
        response['players'][0]['first_name'],
        response['players'][0]['last_name'],
        response['teams'][0]['location'],
        response['teams'][0]['nickname'],
        response['players'][0]['position_name'],
        response['players'][0]['uniform_number'],
        response['players'][0]['years_of_experience']
      )
    })
  }

}
