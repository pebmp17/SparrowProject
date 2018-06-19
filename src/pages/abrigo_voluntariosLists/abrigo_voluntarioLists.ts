
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-abrigo_voluntarioLists',
  templateUrl: 'abrigo_voluntarioLists.html',
})
export class AbrigoVoluntarioListsPage {

 constructor(public alertCtrl: AlertController) {}

 showDiv() {}

    aparecerPopup(){
      const alert = this.alertCtrl.create({
      title: 'Obrigado!',
      subTitle: 'Agora, seu pedido será confirmado em breve!',
      buttons: ['OK']
    });
    alert.present();
    }

}




