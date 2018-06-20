import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { ConferenceApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { UserData } from '../providers/user-data';
import { ConferenceData } from '../providers/conference-data';


import { CartilhaPage } from '../pages/cartilha/cartilha';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { VoluntarioPage } from '../pages/voluntario/voluntario';
import { HomePage } from '../pages/home/home';
import { HomeDetalhesPage } from '../pages/home-detalhes/home-detalhes';
import { CartilhaDetalhesPage } from '../pages/cartilha-detalhes/cartilha-detalhes';
import { Abrigo_TabsPage } from '../pages/abrigo_tabs-page/abrigo_tabs-page';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { DonatePage } from '../pages/doação/doação';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';

import { AbrigoDonatePage } from '../pages/abrigo_donate/abrigo_donate';
import { AbrigoDonateCreate } from '../pages/abrigo_donateCreate/abrigo_donateCreate';
import { AbrigoEventCreate } from '../pages/abrigo_eventCreate/abrigo_eventCreate';
import { AbrigoVoluntarioPage } from '../pages/abrigo_voluntario/abrigo_voluntario';
import { AbrigoMapPage } from '../pages/abrigo_map/abrigo_map';
import { AbrigoMapCreate } from '../pages/abrigo_mapCreate/abrigo_mapCreate';


import { ChatTestPage } from '../pages/chatTest/chatTest';
import { SigninPage } from '../pages/signin/signin';
import { RoomPage } from '../pages/room/room';
import { AddRoomPage } from '../pages/add-room/add-room';


@NgModule({
  declarations: [
    ConferenceApp,
    CartilhaPage,
    SobrePage,
    ContatoPage,
    AccountPage,
    LoginPage,
    MapPage,
    VoluntarioPage,
    DonatePage,
    HomePage,
    HomeDetalhesPage,
    CartilhaDetalhesPage,
    TabsPage,
    Abrigo_TabsPage,
    AbrigoDonatePage,
    AbrigoDonateCreate,
    AbrigoEventCreate,
    AbrigoVoluntarioPage,
    AbrigoMapPage,
    AbrigoMapCreate,
    TutorialPage,
    NotificacoesPage,
    ChatTestPage,
    SigninPage,
    RoomPage,
    AddRoomPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: Abrigo_TabsPage, name: 'Abrigo_TabsPage', segment: 'abrigo_tabs-page' },
        { component: VoluntarioPage, name: 'Voluntário', segment: 'voluntario' },
        { component: HomePage, name: 'HomePage', segment: 'HomePage' },
        { component: HomeDetalhesPage, name: 'HomeDetalhesPage', segment: 'HomeDetalhesPage' },
        { component: AbrigoDonateCreate, name: 'AbrigoDonateCreate', segment: 'AbrigoDonateCreate' },
        { component: AbrigoEventCreate, name: 'AbrigoEventCreate', segment: 'AbrigoEventCreate' },
        { component: AbrigoMapCreate, name: 'AbrigoMapCreate', segment: 'AbrigoMapCreate' },
        { component: MapPage, name: 'Pontos de coleta', segment: 'map' },
        { component: CartilhaPage, name: 'CartilhaPage', segment: 'cartilha' },
        { component: CartilhaDetalhesPage, name: 'CartilhaDetalhesPage', segment: 'CartilhaDetalhesPage' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: NotificacoesPage, name: 'NotificacoesPage', segment: 'notificacoes' },
        { component: SobrePage, name: 'SobrePage', segment: 'sobre' },
        { component: ContatoPage, name: 'ContatoPage', segment: 'contato' },
        { component: ChatTestPage, name: 'ChatTestPage', segment: 'chatTest' },
        { component: SigninPage, name: 'SigninPage', segment: 'SigninPage' },
        { component: RoomPage, name: 'RoomPage', segment: 'room' },
        { component: AddRoomPage, name: 'AddRoomPage', segment: 'addroom' }
      ]
    }
    ),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    CartilhaPage,
    AccountPage,
    LoginPage,
    MapPage,
    VoluntarioPage,
    DonatePage,
    HomePage,
    HomeDetalhesPage,
    CartilhaDetalhesPage,
    Abrigo_TabsPage,
    AbrigoDonatePage,
    AbrigoDonateCreate,
    AbrigoEventCreate,
    AbrigoVoluntarioPage,
    AbrigoMapPage,
    AbrigoMapCreate,
    TabsPage,
    TutorialPage,
    NotificacoesPage,
    SobrePage,
    ContatoPage,
    ChatTestPage,
    SigninPage,
    RoomPage,
    AddRoomPage  
  ],
  providers: [
    UserData,
    ConferenceData,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HttpModule,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule { }
