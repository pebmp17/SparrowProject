import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-cartilha',
  templateUrl: 'cartilha.html'
})
export class CartilhaPage {

  constructor(public nav: NavController) {

  }


  backToRoot() {
    this.nav.push('CartilhaDetalhesPage')
  }  
}
