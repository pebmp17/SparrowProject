import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-conversas',
  templateUrl: 'conversas.html'
})
export class ConversasPage {

  constructor(public nav: NavController) {

  }
  backToRoot() {
    this.nav.setRoot('TabsPage')
  }

  ionViewDidEnter() {
  }

}
