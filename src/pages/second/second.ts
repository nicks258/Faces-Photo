import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {NativeStorage} from "@ionic-native/native-storage";

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public native:NativeStorage) {
    this.generateRandomImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }


  enter(){
    this.native.setItem("name",this.name).then(value => {
      console.log("saved->"+value);
    }),error => console.error('Error storing item', error)
    this.native.setItem("email",this.email);
    console.log("name->" + this.name +" -> " + this.email);
    // this.native.setItem("backgroundImages",JSON.stringify(this.backgroundImages));
    this.native.setItem("backgroundImages",JSON.stringify(this.backgroundImages));
    this.navCtrl.push(HomePage, {animate: true, animation: 'transition', duration: 300, direction: 'forward'});
  }



  generateRandomImage() {
    for(let i=0;i<4;i++) {
      this.number = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      this.backgroundImages.push(this.number);
    }
  }
}
