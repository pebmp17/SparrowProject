import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { DoarPedidos } from '../../interfaces/user-options';
import * as firebase from 'firebase';


@Component({
	selector: 'page-donateCreate',
	templateUrl: 'abrigo_donateCreate.html'
})
export class AbrigoDonateCreate {
	pedidoDoar: DoarPedidos = {titulo: '', descricao: '',tipo: '' };
	ref = firebase.database().ref('donateRequest/');

	constructor(public nav: NavController,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController) {
	}

	confirmRequest(){
		var user = firebase.auth().currentUser;
		let newData = this.ref.push();
		newData.set({
			titulo:this.pedidoDoar.titulo,
			descricao: this.pedidoDoar.descricao,
			tipo: this.pedidoDoar.tipo,
			createdBy: user.displayName,
			avatar: user.photoURL
		});
		let toast = this.toastCtrl.create({
			message: 'Solicitação enviada',
			duration: 3000
		});
		toast.present();
		this.nav.pop();
	}
}
