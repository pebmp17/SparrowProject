import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('mySlider') mySlider: any;
	banners = [
	{
		"img":"assets/imgs/slide1.jpg",
		"titulo":"HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
		"noticia": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
	},
	{
		"img":"assets/imgs/slide2.jpg",
		"titulo":"Lorem ipsum dolor sit amet, consectetuer",
		"noticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat."
	},
	{
		"img":"assets/imgs/slide3.jpg",
		"titulo":"Lorem ipsum dolor sit amet, consectetuer",
		"noticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat."
	},
	{
		"img":"assets/imgs/slide4.jpg",
		"titulo":"Lorem ipsum dolor sit amet, consectetuer",
		"noticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat."
	},
	{
		"img":"assets/imgs/slide5.jpeg",
		"titulo":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae",
		"noticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat."
	},
	]
	slideNext(){
		this.mySlider.slideNext();
	}

	slidePrev(){
		this.mySlider.slidePrev();
	}
	constructor() {
	}

}
