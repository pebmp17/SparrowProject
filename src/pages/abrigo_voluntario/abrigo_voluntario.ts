import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AbrigoEventCreate } from '../abrigo_eventCreate/abrigo_eventCreate';
import * as firebase from 'firebase';



@Component({
	selector: 'page-abrigos_voluntario',
	templateUrl: 'abrigo_voluntario.html',
})
export class AbrigoVoluntarioPage {
	requests = [];
	userDisplayName:string;
	constructor(public nav: NavController) {
		this.getDisplayName();
		firebase.database().ref('eventRequest/').on('value', resp => {
			this.requests = [];
			this.requests = snapshotToArray(resp);
		});
	}

	goToCreate(){
		this.nav.push(AbrigoEventCreate);
	}

	getDisplayName() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.userDisplayName = user.displayName;
      }
    };
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

