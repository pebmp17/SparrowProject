import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { MapaPedidos } from '../../interfaces/user-options';
import * as firebase from 'firebase';

@Component({
	selector: 'page-mapCreate',
	templateUrl: 'abrigo_mapCreate.html'
})
export class AbrigoMapCreate {
	pedidoMapa: MapaPedidos = {titulo: '', descricao: '', lat: '', long: '', horarioInicio: '', horarioFim:'' };
	ref = firebase.database().ref('mapPoints/');

	constructor(public nav: NavController,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController) {
	}

	confirmRequest(){
		var user = firebase.auth().currentUser;
		let newData = this.ref.push();
		newData.set({
			titulo:this.pedidoMapa.titulo,
			descricao: this.pedidoMapa.descricao,
			horarioInicio: this.pedidoMapa.horarioInicio,
			horarioFim: this.pedidoMapa.horarioFim,
			lat: this.pedidoMapa.lat,
			long: this.pedidoMapa.long,
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
