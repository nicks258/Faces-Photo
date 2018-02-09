import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CameraPage} from "../camera/camera";
import {NativeStorage} from "@ionic-native/native-storage";
import {GlobalProvider} from "../../providers/global/global";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;
  email;
  baseStrings = [];
  imagepath;
  backgroundImages=[];
  arrayLength;
  details={
    // name : "",
    // email : ""
  };
  constructor(public navParam:NavParams, public navCtrl: NavController,public native:NativeStorage,public global:GlobalProvider) {
    if(global.myGlobalVar!=undefined) {
      this.native.getItem('baseStringArray').then(value => {
        this.baseStrings = JSON.parse(value);
        this.baseStrings.push(global.myGlobalVar);
        this.native.setItem('baseStringArray',JSON.stringify(this.baseStrings));
      },reason =>{
        this.baseStrings.push(global.myGlobalVar);
        this.native.setItem('baseStringArray',JSON.stringify(this.baseStrings));
      } );

    }

      // this.imagepath = "8.jpg";
      // this.name  = JSON.parse(native.getItem("backgroundImages"));
    native.getItem("backgroundImages").then(value => {
      this.backgroundImages = JSON.parse(value);
      this.arrayLength = this.backgroundImages.length;
      // if(global.myGlobalVar0!=undefined)
      // {
      //   native.setItem("bas64_"+this.arrayLength+1,this.global.myGlobalVar);
      //   console.log("global" + global.myGlobalVar);
      // }

      console.log("Home length->"+this.baseStrings.length);
      let selectedImage = this.backgroundImages[this.arrayLength-1];
      this.imagepath = selectedImage + ".jpg";
      for(let dev of this.backgroundImages)
      {
        console.log(dev);
      }
      this.backgroundImages.splice(this.arrayLength-1,1);
      // this.arrayLength = this.backgroundImages.length;
      console.log("After Slice");
      for(let dev of this.backgroundImages)
      {
        console.log(dev);
      }
      this.native.setItem("backgroundImages",JSON.stringify(this.backgroundImages));
      setTimeout(function () {
        navCtrl.push(CameraPage, {animate: true, animation: 'transition', duration: 300, direction: 'forward'});

      },5000);
    });
    // this.arrayLength = this.backgroundImages.length;
    // console.log("array123Length Home->"+this.arrayLength);
    // console.log("arrayLength Home->"+this.arrayLength);



    // for(let dev of this.backgroundImages)
    // {
    //   // console.log(dev.firstname + "->" + dev.lastname + "->" + dev.email);
    //   // this.imagepath = dev + ".png";
    //   console.log(dev);
    // }

    // for(let dev of this.backgroundImages)
    // {
    //   // console.log(dev.firstname + "->" + dev.lastname + "->" + dev.email);
    //   this.imagepath = dev + ".png";
    //   console.log(dev);
    //   setTimeout(300)
    // }
  }
  // nextPage(){
  //
  // }
  // submit(){
  //   let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if(!re.test(this.email)) {
  //     // Invalid Email
  //     alert("Email is not valid !!");
  //   }
  //   else {
  //     this.details ={
  //       name : this.name,
  //       email : this.email
  //     };
  //     // this.backgroundImages.pop();
  //     for(let dev of this.backgroundImages)
  //     {
  //       // console.log(dev.firstname + "->" + dev.lastname + "->" + dev.email);
  //       this.imagepath = dev + ".png";
  //       console.log(dev);
  //       setTimeout(300)
  //     }
  //     // this.navCtrl.push(CameraPage,{details:this.details})
  //   }
  // }

}
