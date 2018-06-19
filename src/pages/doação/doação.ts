import { Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';


@Component({
  selector: 'page-donate',
  templateUrl: 'doação.html'
})
export class DonatePage {
  requests = [];

  constructor(public alertCtrl: AlertController) {
    firebase.database().ref('donateRequest/').on('value', resp => {
      this.requests = [];
      this.requests = snapshotToArray(resp);
    });
  }
  
  aparecerPopup(){
    const alert = this.alertCtrl.create({
      title: 'Obrigado!',
      subTitle: 'Agora, seu pedido será confirmado em breve!',
      buttons: ['OK']
    });
    alert.present();
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

