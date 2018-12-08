import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor(
    private firstName: String,
    private lastName: String,
    private teamLocation: String,
    private teanNickName: String,
    private position: String,
    private number: String,
    private experience: number
  ) { }

  ngOnInit() {
  }

}
