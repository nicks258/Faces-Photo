import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";
import {CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions} from "@ionic-native/camera-preview";
import {HomePage} from "../home/home";
import {ThanksPage} from "../thanks/thanks";
import {GlobalProvider} from "../../providers/global/global";
// import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  backgroundImages=[];
  backgroundImagesLength;
  base64ImageData;
  // cameraCounter = 4;
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'front',
    tapPhoto: false,
    previewDrag: false,
    toBack: false,
    alpha: 1,
  };
  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 55
  };

  private picture;
  constructor(public navCtrl: NavController, public navParams: NavParams,public native:NativeStorage,public cameraPreview:CameraPreview,public global:GlobalProvider) {
    // console.log(this.navParams.get("details"));
    // this.backgroundImages  = navParams.get("backgroundImages");
    // let arrayLength = this.backgroundImages.length;
    native.getItem("backgroundImages").then(value => {
      this.backgroundImages = JSON.parse(value);
      this.backgroundImagesLength = this.backgroundImages.length;
      console.log(this.backgroundImagesLength);
      console.log("Araylength- >" + this.backgroundImagesLength);
      if(this.backgroundImagesLength==0)
      {
        cameraPreview.startCamera(this.cameraPreviewOpts).then(
          (res) => {
        //

            setTimeout(function () {
              cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
                // alert(imageData);
                this.base64ImageData = imageData;
                global.myGlobalVar0 = imageData;
                  // if(this.backgroundImagesLength==3)
                // {
                //   global.myGlobalVar3 = imageData;
                // }
                // else if(this.backgroundImagesLength==2)
                // {
                //   global.myGlobalVar2 = imageData;
                // }
                // else if (this.backgroundImagesLength==1)
                // {
                //   global.myGlobalVar1 = imageData;
                // }
                // this.native.setItem("base64_", this.base64ImageData);
                // this.native.setItem("backgroundImages", JSON.stringify(this.backgroundImages));
                console.log(this.base64ImageData);
                cameraPreview.stopCamera();
                navCtrl.push(ThanksPage, {animate: true, animation: 'transition', duration: 300, direction: 'forward'});
                // navCtrl.push(HomePage);
              }, (err) => {
                alert(err);

              });
            },3000);
          });
      }
      else
        {
        cameraPreview.startCamera(this.cameraPreviewOpts).then(
          (res) => {
            // alert(res);
            //
            // /*
            console.log("Hulala0->>" + this.backgroundImagesLength);
            setTimeout(function () {
              cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
                global.myGlobalVar = imageData;
                // alert(imageData);
                this.base64ImageData = imageData;
                if(this.backgroundImagesLength==3)
                {
                  console.log("Hulala1->>" + this.backgroundImagesLength);
                  global.myGlobalVar3 = imageData;
                }
                else if(this.backgroundImagesLength==2)
                {
                  global.myGlobalVar2 = imageData;
                }
                else if (this.backgroundImagesLength==1)
                {
                  global.myGlobalVar1 = imageData;
                }
                // this.native.setItem("base64_", this.base64ImageData);
                // this.native.setItem("backgroundImages", JSON.stringify(this.backgroundImages));
                // console.log(this.base64ImageData);
                navCtrl.push(HomePage, {animate: true, animation: 'transition', duration: 300, direction: 'forward'});
                cameraPreview.stopCamera();
                // navCtrl.push(HomePage);
              }, (err) => {
                alert(err);

              });
            },3000);
          },
          (err) => {
            console.log(err);
            alert(err);
          });

      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
  // imageCounterDecrement(){
  //   this.cameraCounter--;
  //   setTimeout(this.takeImage,3000);
  //   // this.takeImage();
  // }
  startCamera(){

  }
  // takeImage(){
  //
  //   // this.task = setTimeout( () => {
  //   //   this.openPreview();
  //   // }, 500);
  //
  // }


}
