import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {NativeStorage} from "@ionic-native/native-storage";
import {PreviewPage} from "../preview/preview";
import {Http} from "@angular/http";

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
  fileName1;
  fileName0;
  fileName3;
  fileName2;
  fileSend0;
  fileSend1;
  fileSend2;
  fileSend3;
  baseStrings = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public global:GlobalProvider,public native:NativeStorage , public http:Http) {
    console.log("Global1->>" + global.myGlobalVar1);
    // var u = (native.getItem("base4").then(value => console.log("this -> "+value)));
    console.log("Global2->>" + global.myGlobalVar2);
    console.log("Global3->>" + global.myGlobalVar3);
    // console.log("Global0->>" + global.myGlobalVar0);
    native.getItem("baseStringArray").then(value => {
      this.baseStrings = JSON.parse(value);
      // this.fileName =
      for(let i =0;i<this.baseStrings.length;i++)
      {
        if(i==0)
        {
          this.fileName0 = "data:image/png;base64," + this.baseStrings[i];
          this.fileSend0 = this.baseStrings[i];
        }
        if(i==1)
        {
          this.fileName1 = "data:image/png;base64," + this.baseStrings[i];
          this.fileSend1 = this.baseStrings[i];
        }
        if(i==2)
        {
          this.fileName2 = "data:image/png;base64," + this.baseStrings[i];
          this.fileSend2 = this.baseStrings[i];
        }
        // if(i==3)
        // {
        //   this.fileName3 = "data:image/png;base64," + this.baseStrings[i];
        //   this.fileSend3 = this.baseStrings[i];
        // }
      }
        this.fileName3 = "data:image/png;base64," + global.myGlobalVar0;
        this.fileSend3 = global.myGlobalVar0;
      this.sendDetailsToServer();
      // for(let dev of this.baseStrings)
      // {
      //   console.log("->" + dev);
      // }
    });
    setTimeout(function () {

      navCtrl.push(PreviewPage, {animate: true, animation: 'transition', duration: 300, direction: 'forward'});
    },9000)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksPage');
  }

  sendDetailsToServer(){
    let body = new FormData();
    let date = new Date(new Date().toISOString());
    // body.append('location', "jaipur");
    // body.append('name',this.peopleDetail.name);
    // body.append('mobile',this.peopleDetail.phone_number);
    // body.append('email',this.peopleDetail.email);
    // body.append('photo_base_64',this.baseImageString);
    // body.append('clicked_on',new Date().toISOString());
    // body.append('user_id',"nicks");
    // body.append('password',"2702100000");
    // const bytes: string = atob(this.ba);
    // const byteNumbers = new Array(bytes.length);
    // for (let i = 0; i < bytes.length; i++) {
    //   byteNumbers[i] = bytes.charCodeAt(i);
    // }
    // const byteArray = new Uint8Array(byteNumbers);
    //
    // const blob: Blob = new Blob([byteArray], { type: 'image/png' });

    let name :any;
    let email:any;
    let location :any;
    this.native.getItem("name").then(value => {
      name = value;
      console.log("name->"+name);
      this.native.getItem("email").then(value => {
        email = value;
        console.log("email->"+email);
        this.native.getItem("location").then(value =>{
          location = value;
        });

        body.append('location', location);
        body.append('name',name);
        body.append('mobile',"NA");
        body.append('email',email);
        body.append('photo_base_64_1',this.fileSend0);
        body.append('photo_base_64_2',this.fileSend1);
        body.append('photo_base_64_3',this.fileSend2);
        body.append('photo_base_64_4',this.fileSend3);
        body.append('clicked_on',new Date().toISOString());
        body.append('user_id',"faces");
        body.append('password',"FS#123");
        let headers = new Headers();
        let options = { headers: headers };
        this.http.post('http://52.66.132.37/faces_photobooth/saveclick_rest/', body ).subscribe(data => {
          console.log(data);
          let data_to_use = data.json();
          console.log(data_to_use);
        },error2 => {
          // loadingPopup.dismiss();



          console.log("error->" + error2);
        });



      });

    });


  }

}
