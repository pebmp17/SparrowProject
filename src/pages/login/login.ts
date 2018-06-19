import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { Abrigo_TabsPage } from '../abrigo_tabs-page/abrigo_tabs-page';
import { TabsPage } from '../tabs-page/tabs-page';

import { AlertController } from 'ionic-angular';

import * as firebase from 'firebase';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = {email: '', password: '' };

  userDisplayName: string;
  
  segment = "loginView";
  submitted = false;

  constructor(public alertCtrl: AlertController, public nav: NavController,  public userData: UserData) {
  }

  backToRoot() {
    this.nav.setRoot('TabsPage')
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    var erro;
    if (form.valid) {
      var check = true;
      firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password).catch(function(error) {
        erro=error;
        check = false;
      })
      if (check){
        this.userData.login(this.login.email, 'user');
        this.nav.push(Abrigo_TabsPage);
      }
      else{
        this.alertCtrl.create({
          title: 'Erro',
          subTitle: erro,
          buttons: ['OK']
        }).present();
      }
    }
  }
  onSignup(form: NgForm) {
    if(form.valid){
      firebase.auth().createUserWithEmailAndPassword(this.login.email, this.login.password)
      .then(function(user) {
        var user2 = firebase.auth().currentUser;
        user2.updateProfile({
          displayName: user2.email.split("@")[0],
          photoURL: "http://www.gravatar.com/avatar?d=mm&s=140",
        })
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('A senha é muito fraca');
        } else if (errorCode == 'auth/email-already-in-use') {
          alert('O email já está em uso.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
    this.userData.signup(this.login.email.split("@")[0], 'user');
    this.nav.push(Abrigo_TabsPage);
  }
  
}