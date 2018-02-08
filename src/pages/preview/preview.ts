import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";
import set = Reflect.set;
import {SecondPage} from "../second/second";

/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public native:NativeStorage) {
    this.native.remove("name");
    this.native.remove("email");
    this.native.remove("backgroundImages");
    this.native.remove("baseStringArray");
    this.native.clear();
    setTimeout(function () {
      navCtrl.push(SecondPage, {animate: true, animation: 'transition', duration: 300, direction: 'forward'});
    },3000)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

}
