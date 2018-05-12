import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Lista para importar classes vindas dos arquivos .ts
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/searchTest/searchTest';
import { CardsPage } from '../pages/cards/cards';
import { ListPage } from '../pages/configs/configs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Lista para navegação na side-menu
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Pesquisa', component: SearchPage },
      { title: 'Cards', component: CardsPage },
      { title: 'Configurações', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
