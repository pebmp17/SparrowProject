
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform } from 'ionic-angular';


declare var google: any;


@Component({
  selector: 'page-abrigo_map',
  templateUrl: 'abrigo_map.html',
})
export class AbrigoMapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  
  constructor(public platform: Platform) {
  }

  ionViewDidLoad() {

  }
  showDiv() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

}

