import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = { "clientId" : 1, "domain" : "Local", "username" : "nice", "password" : "nice123"};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider) {
  }

  signup(){
    this.authService.postData(this.userData,'signup').then((result) => {
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
