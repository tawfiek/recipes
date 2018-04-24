import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

import {AuthServise} from "../../../services/auth";
import {AlertController, LoadingController, ToastController} from "ionic-angular";


@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  constructor (private  authService:AuthServise,
               private  loadingCtrl:LoadingController,
               private alertCtrl:AlertController,
               private toastCtrl:ToastController) {}

  onSignin(form: NgForm) {



    const loading = this.loadingCtrl.create({
      content: 'signing you In ... '
    });
    loading.present();
   this.authService.signin(form.value.email, form.value.password)
     .then(data => {
       loading.dismiss();
        let message= "Welcome" ;
       const toast= this.toastCtrl.create({
         message: message ,
         duration: 3000 ,
         position : 'bottom'
       });

       toast.present() ;
       })
     .catch(error => {
       loading.present() ;

       const alert = this.alertCtrl.create({
         title: 'Signin Failed',
         message : error.message ,
         buttons : ['ok']
       }) ;
       loading.dismiss();
       alert.present();
     });
  }
}
