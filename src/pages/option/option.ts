import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";
import {HomePage} from "../home/home";
import {SecondPage} from "../second/second";

/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {
  location;
  constructor(public navCtrl: NavController, public navParams: NavParams,public native:NativeStorage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionPage');
  }
  submit(){
    this.native.setItem("location",this.location);
    console.log(this.location);
    this.navCtrl.push(SecondPage);
  }
}
