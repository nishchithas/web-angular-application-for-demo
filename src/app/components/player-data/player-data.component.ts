import { Component, OnInit } from '@angular/core';
import { PlayerData } from 'src/app/Interfaces/player-data';
import { PlayerDataService } from 'src/app/services/player_data.service';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
  playerData: PlayerData[] = [];

  constructor(private playerDataService: PlayerDataService)
  {

  }

  ngOnInit(): void {
    this.playerDataService.getPlayerStatsData().subscribe(data => {
      this.playerData = data.Results;
    })
  }

}
