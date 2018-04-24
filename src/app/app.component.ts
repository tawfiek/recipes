import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase' ;

import {TabsPage} from "../pages/tabs/tabs";
import {SignInPage} from "../pages/sign-in/sign-in";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {AuthServise} from "../../services/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootpage: any = TabsPage;
  signinPage = SignInPage;
  signupPage = SignUpPage;
  isAuthenticated = false ;
  @ViewChild ('nav')nav:NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private authService:AuthServise,
              private menuCtrl:MenuController) {
    firebase.initializeApp({
      apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.isAuthenticated = true ;
        this.rootpage= TabsPage ;
      }
      else {
         this.isAuthenticated= false ;
         this.rootpage= SignInPage ;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }


  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SignInPage);
  }

}

