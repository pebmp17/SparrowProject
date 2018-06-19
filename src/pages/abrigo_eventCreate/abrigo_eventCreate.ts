import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { EventoPedidos } from '../../interfaces/user-options';
import * as firebase from 'firebase';

@Component({
	selector: 'page-eventCreate',
	templateUrl: 'abrigo_eventCreate.html'
})
export class AbrigoEventCreate {
	pedidoEvento: EventoPedidos = {titulo: '', descricao: '',data: '', horarioInicio: '', horarioFim:'' };
	ref = firebase.database().ref('eventRequest/');

	constructor(public nav: NavController,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController) {
	}

	confirmRequest(){
		var user = firebase.auth().currentUser;
		let newData = this.ref.push();
		newData.set({
			titulo:this.pedidoEvento.titulo,
			descricao: this.pedidoEvento.descricao,
			data: this.pedidoEvento.data,
			horarioInicio: this.pedidoEvento.horarioInicio,
			horarioFim: this.pedidoEvento.horarioFim,
			createdBy: user.displayName,
			participants: '1',
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
