import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyFavoritesPage } from "../my-favorites/my-favorites";
import { NavParams } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyFavoritesPage;

  user: any;

  constructor(public params: NavParams) {
  }

  ngOnInit() {
    this.user = {user: this.params.data.user};
  }
}
