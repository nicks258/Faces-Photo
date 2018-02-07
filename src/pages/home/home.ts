import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CameraPage} from "../camera/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;
  email;
  imagepath;
  backgroundImages=[];
  arrayLength;
  details={
    // name : "",
    // email : ""
  };
  constructor(public navParam:NavParams, public navCtrl: NavController) {
      // this.imagepath = "08.png";
      this.backgroundImages  = navParam.get("backgroundImages");
    // this.arrayLength = this.backgroundImages.length;
    // console.log("arrayLength->"+this.arrayLength);
    // let selectedImage = this.backgroundImages[this.arrayLength-1];
    // this.imagepath = selectedImage + ".png";
    // // this.backgroundImages.splice(this.arrayLength-1,1);
    // this.arrayLength = this.backgroundImages.length;
    // console.log("arrayLength->"+this.arrayLength);
    //
    // for(let dev of this.backgroundImages)
    // {
    //   // console.log(dev.firstname + "->" + dev.lastname + "->" + dev.email);
    //   // this.imagepath = dev + ".png";
    //   console.log(dev);
    //   setTimeout(300)
    // }
    setTimeout(function () {


    },2000);
    // for(let dev of this.backgroundImages)
    // {
    //   // console.log(dev.firstname + "->" + dev.lastname + "->" + dev.email);
    //   this.imagepath = dev + ".png";
    //   console.log(dev);
    //   setTimeout(300)
    // }
    navCtrl.push(CameraPage,{backgroundImages:this.backgroundImages});

  }
  nextPage(){

  }
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
