import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})
export class ContatoPage {

  submitted: boolean = false;
  supportMessage: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
    ) {

  }

  ionViewDidEnter() {
  }

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      let toast = this.toastCtrl.create({
        message: 'Tente novamente no próximo checkpoint',
        duration: 3000
      });
      toast.present();
    }
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Sair da página?',
        message: 'Você tem certeza que quer sair dessa página? Seu formulário ainda não foi enviado'
      });
      alert.addButton({ text: 'Cancelar', handler: reject });
      alert.addButton({ text: 'Sair', role: 'cancel', handler: resolve });

      alert.present();
    });
  }
  backToRoot() {
    this.navCtrl.setRoot('Abrigo_TabsPage')
  }  
}
