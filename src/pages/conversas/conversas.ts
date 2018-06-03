import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-conversas',
  templateUrl: 'conversas.html'
})
export class ConversasPage {

  toUser : {toUserId: string, toUserName: string};

  constructor(public nav:NavController) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }
  backToRoot() {
    this.nav.setRoot('TabsPage')
  }
}
