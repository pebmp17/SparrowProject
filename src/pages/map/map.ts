import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import { AbrigoMapCreate } from '../abrigo_mapCreate/abrigo_mapCreate';


import { Platform } from 'ionic-angular';

import * as firebase from 'firebase';



declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  
  requests = [];
  userDisplayName:string;


  constructor(public nav: NavController, public confData: ConferenceData, public platform: Platform) {
    this.getDisplayName();
    firebase.database().ref('mapPoints/').on('value', resp => {
      this.requests = [];
      this.requests = snapshotToArray(resp);
    });
  }

  getDisplayName() {
    var user = firebase.auth().currentUser;
    if (user) {
      if(user != null){
        this.userDisplayName = user.displayName;
      }
    };
  }

  goToCreate(){
    this.nav.push(AbrigoMapCreate);
  }

  ionViewDidLoad() {

    this.confData.getMap().subscribe((mapData: any) => {
      let mapEle = this.mapElement.nativeElement;

      let map = new google.maps.Map(mapEle, {
        center: mapData.find((d: any) => d.center),
        zoom: 12
      });

      mapData.forEach((markerData: any) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

    });
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
