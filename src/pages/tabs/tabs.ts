import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyFavoritesPage } from "../my-favorites/my-favorites";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyFavoritesPage;


  constructor() {

  }
}
