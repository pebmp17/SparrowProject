import { Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-donate',
  templateUrl: 'doação.html'
})
export class DonatePage {

  constructor(public alertCtrl: AlertController) {}

   showDiv() {
   var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
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
