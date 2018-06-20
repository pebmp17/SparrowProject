import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { CartilhaPage } from '../cartilha/cartilha';
import { MapPage } from '../map/map';
import { AbrigoVoluntarioPage } from '../abrigo_voluntario/abrigo_voluntario';
import { HomePage } from '../home/home';
import { AbrigoDonatePage } from '../abrigo_donate/abrigo_donate';


@Component({
  templateUrl: 'abrigo_tabs-page.html'
})
export class Abrigo_TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = AbrigoVoluntarioPage;
  tab3Root: any = AbrigoDonatePage;
  tab4Root: any = MapPage;
  tab5Root: any = CartilhaPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
