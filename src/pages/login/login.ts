import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  segment = "loginView"
  constructor(public nav: NavController) { }


  backToRoot() {
    this.nav.setRoot('TabsPage')
  }
}
