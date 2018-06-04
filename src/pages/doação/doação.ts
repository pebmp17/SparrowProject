import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-donate',
  templateUrl: 'doação.html'
})
export class DonatePage {
  items: any = [];
  itemExpandHeight: number = 100;
  @ViewChild('voluntario', { read: List }) voluntario: List;

  dayIndex = 0;
  queryText = '';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('Doação');
    this.updateVoluntario();
  }

  updateVoluntario() {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  doRefresh(refresher: Refresher) {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;

      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'As ofertas de voluntáriado foram atualizadas',
          duration: 3000
        });
        toast.present();
      }, 1000);
    });
  }
}
