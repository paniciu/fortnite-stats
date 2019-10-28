import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { GlobalVar } from '../../globals';
import 'rxjs/add/operator/map';

interface Player {

}

/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {

  player$: Observable<Player[]>;

  constructor(public http: HttpClient) {

  }

  getPlayerStats(platform, name) {

    const headers = new HttpHeaders().set('TRN-Api-Key', GlobalVar.FORTNITE_API);

    this.player$ = this.http.get<Player[]>('/v1/profile/' + platform + '/' + name, {headers}).map(res => res);

    return this.player$;

  }

}
