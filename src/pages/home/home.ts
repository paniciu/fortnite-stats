import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PlayerProvider } from '../../providers/player/player';
import { UsernamePage } from '../../pages/username/username';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PlayerProvider]
})
export class HomePage {

  playerData: Object;
  loading;

  constructor(public navCtrl: NavController, private storage: Storage, public loadingCtrl: LoadingController, private playerProvider: PlayerProvider) {

  }

  ionViewDidLoad() {

    // Check if player already exist in storage
    this.storage.get('playerdata').then((val) => {
      if (val == null) {
        this.navCtrl.push(UsernamePage);
      } else {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: ''
        });
        this.loading.present();
        this.playerProvider.getPlayerStats(val.platform, val.username).subscribe(data => {
          this.playerData = data;
          this.loading.dismiss();
        }, err => {
          console.log(err);
          this.loading.dismiss();
        });
      }
    });

  }

  changePlayer() {
    this.storage.remove('playerdata');
    this.navCtrl.push(UsernamePage);
  }

}
