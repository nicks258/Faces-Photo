import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {NativeStorage} from "@ionic-native/native-storage";

/**
 * Generated class for the ThanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {
  baseStrings = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public global:GlobalProvider,public native:NativeStorage) {
    console.log("Global1->>" + global.myGlobalVar1);
    // var u = (native.getItem("base4").then(value => console.log("this -> "+value)));
    console.log("Global2->>" + global.myGlobalVar2);
    console.log("Global3->>" + global.myGlobalVar3);
    // console.log("Global0->>" + global.myGlobalVar0);
    native.getItem("baseStringArray").then(value => {
      this.baseStrings = JSON.parse(value);
      for(let dev of this.baseStrings)
      {
        console.log("->" + dev);
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksPage');
  }

}
