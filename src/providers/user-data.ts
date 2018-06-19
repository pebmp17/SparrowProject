import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';



@Injectable()
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public events: Events,
    public storage: Storage
    ) {}


  login(username: string, type:string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username, type);
    this.events.publish('user:login');
  };

  signup(username: string, type:string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username, type);
    this.events.publish('user:signup');
  };

  logout(): void {
    firebase.auth().signOut();
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string, type:string ): void {
    this.storage.set('username', username);
    this.storage.set('type', type);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
}
