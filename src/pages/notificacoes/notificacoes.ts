import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html'
})
export class NotificacoesPage {

  constructor(public nav: NavController) {

  }


  backToRoot() {
    this.nav.setRoot('Abrigo_TabsPage')
  }  
}
