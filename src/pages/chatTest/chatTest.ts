import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { RoomPage } from '../room/room';
import * as firebase from 'firebase';


@Component({
  selector: 'page-chatTest',
  templateUrl: 'chatTest.html'
})
export class ChatTestPage {
  @ViewChild(Content) content: Content;

  data = { type:'', username:'', message:'' };
  chats = [];
  roomkey:string;
  roomname:string;
  username:string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roomkey = this.navParams.get("key") as string;
    this.roomname = this.navParams.get("roomname") as string;
    this.username = this.navParams.get("username") as string;
    this.data.type = 'message';
    this.data.username = this.username;

    let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    joinData.set({
      type:'join',
      user:this.username,
      message:this.username+' entrou na conversa.',
      sendDate:Date()
    });
    this.data.message = '';

    firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => {
        if(this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  ionViewWillLeave() {
    let exitData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    exitData.set({
      type:'exit',
      user:this.username,
      message:this.username+' saiu da conversa.',
      sendDate:Date()
    });
    this.offStatus = true;
    this.navCtrl.setRoot(RoomPage, {
      username:this.username
    });
  }


  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 80)
  }

  sendMessage() {
    if (/\S/.test(this.data.message)) {
      let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
      newData.set({
        type:this.data.type,
        user:this.data.username,
        message:this.data.message,
        sendDate:Date()
      });
      this.data.message = '';
    }
    
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
