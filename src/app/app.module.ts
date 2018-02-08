import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SplashPage} from "../pages/splash/splash";
import {CameraPage} from "../pages/camera/camera";
import {SecondPage} from "../pages/second/second";
import {NativeStorage} from "@ionic-native/native-storage";
import {ThanksPage} from "../pages/thanks/thanks";

import {CameraPreview} from "@ionic-native/camera-preview";
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    SecondPage,
    ThanksPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{scrollAssist:false,
      autoFocusAssist:false}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    SplashPage,
    ThanksPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    NativeStorage,
    CameraPreview,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
