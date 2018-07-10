import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {name: '', password: ''};

  constructor(public navCtrl: NavController) {
  }

  login() {
    this.navCtrl.setRoot(TabsPage, {user: this.user.name});
  }

}
