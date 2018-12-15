import { Component } from '@angular/core';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {

  constructor(
    public id: string,
    public slug: string,
    public firstName: string,
    public lastName: string,
    public teamLocation: string,
    public teamNickName: string,
    public position: string,
    public number: string,
    public experience: number,
  ) { }
}
