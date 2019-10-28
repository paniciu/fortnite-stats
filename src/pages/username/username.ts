import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the UsernamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-username',
  templateUrl: 'username.html',
})
export class UsernamePage {

  username = "";
  platform = "pc";

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {

  }

  getIn() {

    this.storage.set('playerdata', {'platform': this.platform, 'username': this.username});

    this.navCtrl.push(HomePage);

  }

}
