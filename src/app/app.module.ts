import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Lista para importar classes vindas dos arquivos .ts
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DonatePage } from '../pages/donate/donate';
import { VoluntariarPage } from '../pages/voluntariar/voluntariar';
import { CaronasPage } from '../pages/caronas/caronas';
import { CardsPage } from '../pages/cards/cards';
import { ListPage } from '../pages/configs/configs';

import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
  //Lista de páginas existentes no app
    MyApp,
    HomePage,
    DonatePage,
    VoluntariarPage,
    CaronasPage,
    CardsPage,
    ListPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  //Lista de páginas existentes no app
    MyApp,
    HomePage,
    DonatePage,
    VoluntariarPage,
    CaronasPage,
    CardsPage,
    ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
