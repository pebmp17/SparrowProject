import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {

  constructor(public nav: NavController) {

  }


  backToRoot() {
    this.nav.setRoot('Abrigo_TabsPage')
  }  
}
