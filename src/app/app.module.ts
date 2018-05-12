import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Lista para importar classes vindas dos arquivos .ts
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/searchTest/searchTest';
import { CardsPage } from '../pages/cards/cards';
import { ListPage } from '../pages/configs/configs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
  //Lista de páginas existentes no app
    MyApp,
    HomePage,
    SearchPage,
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
    SearchPage,
    CardsPage,
    ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
