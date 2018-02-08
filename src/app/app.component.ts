import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SplashPage} from "../pages/splash/splash";
import {ThanksPage} from "../pages/thanks/thanks";
import {SecondPage} from "../pages/second/second";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SecondPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

