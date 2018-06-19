import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AbrigoDonateCreate } from '../abrigo_donateCreate/abrigo_donateCreate';
import * as firebase from 'firebase';



@Component({
	selector: 'page-abrigo_donate',
	templateUrl: 'abrigo_donate.html',
})
export class AbrigoDonatePage {
	requests = [];
	userDisplayName:string;
	constructor(public nav: NavController) {
		this.getDisplayName();
		firebase.database().ref('donateRequest/').on('value', resp => {
			this.requests = [];
			this.requests = snapshotToArray(resp);
		});
	}

	goToCreate(){
		this.nav.push(AbrigoDonateCreate);
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
