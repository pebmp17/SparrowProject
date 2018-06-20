import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { ChatTestPage } from '../chatTest/chatTest';
import * as firebase from 'firebase';
import { UserData } from '../../providers/user-data';


@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  username:string;
  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  constructor(public navCtrl: NavController, public navParams: NavParams,  public userData: UserData) {
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }
  
  backToRoot() {
    this.navCtrl.setRoot('Abrigo_TabsPage')
  }
  addRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  ngAfterViewInit() {
    this.getUsername();
  }

  getUsername() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.username = user.displayName;
      }
    };
  }

  joinRoom(key,roomname) {
    this.navCtrl.push(ChatTestPage, {
      key:key,
      roomname:roomname,
      username:this.username,
    });
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
