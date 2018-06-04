import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  signup: UserOptions = { username: '', password: '' };
  
  segment = "loginView"
  submitted = false;

  constructor(public nav: NavController,  public userData: UserData) { }
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.nav.push(TabsPage);
    }
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.nav.push(TabsPage);
    }
  }
  backToRoot() {
    this.nav.setRoot('TabsPage')
  }
}
