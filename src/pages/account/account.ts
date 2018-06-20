import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import * as firebase from 'firebase';



@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  userAvatar: string;
  userEmail: string;
  userDisplayName: string;
  userPassword: string;

  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData) {
  }
  
  backToRoot() {
    this.nav.setRoot('Abrigo_TabsPage')
  }

  ngAfterViewInit() {
    this.getAvatar();
    this.getDisplayName();
    this.getEmail();
  }

  updatePicture() {
    let alert = this.alertCtrl.create({
      title: 'Digite a url do avatar',
      buttons: [
      'Cancel'
      ]
    });
    alert.addInput({
      name: 'avatar',
      value: this.userAvatar,
      placeholder: 'avatar'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.userDisplayName,
          photoURL: data.avatar
        }).then(function() {
        }).catch(function(error) {
        });
      }
    });
    alert.present();
  }
  
  changeEmail() {
    let alert = this.alertCtrl.create({
      title: 'Mudar Email',
      buttons: [
      'Cancel'
      ]
    });
    alert.addInput({
      name: 'email',
      value: this.userEmail,
      placeholder: 'email'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        var user = firebase.auth().currentUser;
        user.updateEmail(data.email).then(function() {
        })
        this.getEmail();
      }
    });
    alert.present();
  }

  getEmail() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.userEmail = user.email;
      }
    };
  }

  getDisplayName() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.userDisplayName = user.displayName;
      }
    };
  }

  getAvatar() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.userAvatar = user.photoURL;
      }
    };
  }

  changePassword() {
    let alert = this.alertCtrl.create({
      title: 'Mudar Senha',
      buttons: [
      'Cancel'
      ]
    });
    alert.addInput({
      name: 'senha',
      value: this.userPassword,
      placeholder: 'senha'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        var user = firebase.auth().currentUser;
        user.updatePassword(data.senha).then(function() {
        })
      }
    });
    alert.present();
  }
}
