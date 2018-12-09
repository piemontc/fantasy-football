import { Component } from '@angular/core';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {

  constructor(
    private id: String,
    private firstName: String,
    private lastName: String,
    private teamLocation: String,
    private teamNickName: String,
    private position: String,
    private number: String,
    private experience: number,
  ) { }
}
