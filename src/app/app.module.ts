import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { CartilhaPage } from '../pages/cartilha/cartilha';
import { SobrePage } from '../pages/sobre/sobre';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { VoluntarioPage } from '../pages/voluntario/voluntario';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { DonatePage } from '../pages/doação/doação';
import { ConversasPage } from '../pages/conversas/conversas';
import { ChatPage } from '../pages/chat/chat';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';


import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    CartilhaPage,
    SobrePage,
    AccountPage,
    LoginPage,
    MapPage,
    VoluntarioPage,
    DonatePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    HomePage,
    TabsPage,
    TutorialPage,
    ConversasPage,
    NotificacoesPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: VoluntarioPage, name: 'Voluntário', segment: 'voluntario' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: HomePage, name: 'HomePage', segment: 'HomePage' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Pontos de coleta', segment: 'map' },
        { component: CartilhaPage, name: 'CartilhaPage', segment: 'cartilha' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: ConversasPage, name: 'ConversasPage', segment: 'conversas' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: ConversasPage, name: 'Conversas', segment: 'conversas' },
        { component: ChatPage, name: 'ChatPage', segment: 'chat' },
        { component: NotificacoesPage, name: 'NotificacoesPage', segment: 'notificacoes' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: SobrePage, name: 'SobrePage', segment: 'sobre' }
      ]
    }),
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
    SignupPage,
    SpeakerDetailPage,
    HomePage,
    TabsPage,
    TutorialPage,
    ConversasPage,
    NotificacoesPage,
    SobrePage,
    ChatPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
