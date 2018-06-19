import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { SobrePage } from '../pages/sobre/sobre';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { Abrigo_TabsPage } from '../pages/abrigo_tabs-page/abrigo_tabs-page';

import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { RoomPage } from '../pages/room/room';

import { ContatoPage } from '../pages/contato/contato';

import * as firebase from 'firebase';

import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

const config = {
  apiKey: 'AIzaSyA_uvBzMx3r_DHSwz31Hh1aj6aMpNSgXqY',
  authDomain: 'sparrowproject-a11a8.firebaseapp.com',
  databaseURL: 'https://sparrowproject-a11a8.firebaseio.com',
  projectId: 'sparrowproject-a11a8',
  storageBucket: 'sparrowproject-a11a8.appspot.com',
};

@Component({
  templateUrl: 'app.template.html'
  
})
export class ConferenceApp {
  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
  { title: 'Entre em contato', name: 'ContatoPage', component: ContatoPage, icon: 'at' },
  { title: 'Sobre', name: 'SobrePage', component: SobrePage, icon: 'ribbon' },
  ];

  loggedInPages: PageInterface[] = [
  { title: 'Conta', name: 'AccountPage', component: AccountPage, icon: 'person' },
  { title: 'Conversas', name: 'RoomPage', component: RoomPage, icon: 'chatbubbles' },
  { title: 'Notificações', name: 'NotificacoesPage', component: NotificacoesPage, icon: 'notifications' },
  { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
  { title: 'Logar/Cadastrar', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
  ];

  rootPage: any;
  username: string;
  userAvatar: string;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen
    ) {
    this.rootPage = LoginPage;
    this.platformReady()
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();
    firebase.initializeApp(config);
  }

  ngAfterViewInit() {
    this.getUsername();
    this.getAvatar();
    console.log(this.userAvatar);
  }

  getUsername() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.username = user.email;
      }
    };
  }

  getAvatar() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.userAvatar = user.photoURL;
      }
    };
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      this.userData.logout();
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }


  platformReady() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

}

