import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  name;
  email;
  number;
  min = 5;
  max = 35;
  backgroundImages=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.generateRandomImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }


  enter(){
    this.navCtrl.push(HomePage,{backgroundImages:this.backgroundImages});
  }



  generateRandomImage() {
    for(let i=0;i<4;i++) {
      this.number = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      this.backgroundImages.push(this.number);
    }
  }
}
