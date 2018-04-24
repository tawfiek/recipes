import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthServise} from "../../../services/auth";
import {AlertController, LoadingController, ToastController} from "ionic-angular";


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {


  constructor(private authService:AuthServise,
              private loadingCtrl:LoadingController,
              private alertCtrl:AlertController,
              private  toastCtrl:ToastController){}
  onSignup(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'signing you up .. '
    }) ;
    loading.present();
    this.authService.signup(form.value.email , form.value.password )
      .then(data => {
        loading.dismiss();
        let message= "Signup Complete !!!  " ;
        const toast= this.toastCtrl.create({
          message: message ,
          duration: 3000 ,
          position : 'bottom'
        });

        toast.present() ;
      })
      .catch(error => {
        console.log(error);
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed',
          message: error.message,
          buttons: ['ok']
        }) ;
        alert.present();
      });

  }

}

