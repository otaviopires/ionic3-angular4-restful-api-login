import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  userData = { "clientId" : 1, "domain" : "Local", "username" : "", "password" : "", "tokenFCM" : "teste"};

  constructor(public navCtrl: NavController, public authService:AuthServiceProvider ) {
  }

  login(){
    console.log(this.userData);
    this.authService.postData(this.userData,'logar').then((result) => {
    this.responseData = result;
    console.log("login works!")
    console.log(this.responseData);
    localStorage.setItem('userData', JSON.stringify(this.responseData));
    this.navCtrl.push(HomePage);
    }, (err) => {
    // Error log
    });
  }
}