import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  cameraCounter = 4;
  // cameraPreviewOpts: CameraPreviewOptions = {
  //   x: 0,
  //   y: 0,
  //   width: window.screen.width,
  //   height: window.screen.height,
  //   camera: 'front',
  //   tapPhoto: false,
  //   previewDrag: false,
  //   toBack: true,
  //   alpha: 1,
  // };
  // pictureOpts: CameraPreviewPictureOptions = {
  //   width: 1280,
  //   height: 1280,
  //   quality: 85
  // };
  private file_name_final: any;
  private picture;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(this.navParams.get("details"));
    this.backgroundImages  = navParams.get("backgroundImages");
    let arrayLength = this.backgroundImages.length;
    console.log("Araylength- >" + arrayLength);
    // this.startCamera();
    // setTimeout({this.takeImage,
    //   this.cameraCounte},3000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
  // imageCounterDecrement(){
  //   this.cameraCounter--;
  //   setTimeout(this.takeImage,3000);
  //   // this.takeImage();
  // }
  // startCamera(){
  //   this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
  //     (res) => {
  //     this.imageCounterDecrement();
  //       // alert(res);
  //       //
  //       // /*
  //     },
  //     (err) => {
  //       console.log(err);
  //       alert(err);
  //     });
  // }
  // takeImage(){
  //   this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
  //     this.picture = 'data:image/png;base64,' + imageData;
  //     const img: string = imageData;
  //     const bytes: string = atob(img);
  //     const byteNumbers = new Array(bytes.length);
  //     for (let i = 0; i < bytes.length; i++) {
  //       byteNumbers[i] = bytes.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);
  //     const blob: Blob = new Blob([byteArray], { type: 'image/png' });
  //     this.file_name_final = imageData;
  //     this.cameraPreview.stopCamera();
  //     // this.openPreview();
  //   }, (err) => {
  //     console.log(err);
  //
  //   });
  //   // this.task = setTimeout( () => {
  //   //   this.openPreview();
  //   // }, 500);
  //
  // }

}
