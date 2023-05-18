import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerResults } from '../Interfaces/player-result';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService{
  constructor(private _http: HttpClient) {}

  getPlayerStatsData(): Observable<PlayerResults> {
    return this._http.get<PlayerResults>('https://mocki.io/v1/970037b9-6d8a-43e1-9c05-aac1fc58841f');
  }

}
