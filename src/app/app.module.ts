import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { ConferenceApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmojiProvider } from '../providers/emoji';

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { CartilhaPage } from '../pages/cartilha/cartilha';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { VoluntarioPage } from '../pages/voluntario/voluntario';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { HomePage } from '../pages/home/home';
import { HomeDetalhesPage } from '../pages/home-detalhes/home-detalhes';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { DonatePage } from '../pages/doação/doação';
import { ConversasPage } from '../pages/conversas/conversas';
import { Chat } from '../pages/chat/chat';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';


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
    ScheduleFilterPage,
    SessionDetailPage,
    SpeakerDetailPage,
    HomePage,
    HomeDetalhesPage,
    TabsPage,
    TutorialPage,
    ConversasPage,
    NotificacoesPage,
    Chat
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: VoluntarioPage, name: 'Voluntário', segment: 'voluntario' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: HomePage, name: 'HomePage', segment: 'HomePage' },
        { component: HomeDetalhesPage, name: 'HomeDetalhesPage', segment: 'HomeDetalhesPage' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Pontos de coleta', segment: 'map' },
        { component: CartilhaPage, name: 'CartilhaPage', segment: 'cartilha' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: ConversasPage, name: 'ConversasPage', segment: 'conversas' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: ConversasPage, name: 'Conversas', segment: 'conversas' },
        { component: Chat, name: 'Chat', segment: 'chat' },
        { component: NotificacoesPage, name: 'NotificacoesPage', segment: 'notificacoes' },
        { component: SobrePage, name: 'SobrePage', segment: 'sobre' },
        { component: ContatoPage, name: 'ContatoPage', segment: 'contato' }

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
    ScheduleFilterPage,
    SessionDetailPage,
    SpeakerDetailPage,
    HomePage,
    HomeDetalhesPage,
    TabsPage,
    TutorialPage,
    ConversasPage,
    NotificacoesPage,
    SobrePage,
    ContatoPage,
    Chat
  ],
  providers: [
    ConferenceData,
    UserData,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HttpModule,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    
  ]
})
export class AppModule { }
