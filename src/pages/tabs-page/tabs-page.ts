import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { CartilhaPage } from '../cartilha/cartilha';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { DonatePage } from '../doação/doação';


@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SpeakerListPage;
  tab2Root: any = SchedulePage;
  tab3Root: any = DonatePage;
  tab4Root: any = MapPage;
  tab5Root: any = CartilhaPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
