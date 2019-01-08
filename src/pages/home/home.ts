import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  userDetails : any;
  responseData: any;
  userPostData: {"id":"","authenticatorToken":""};

  constructor(public navCtrl: NavController, public app: App) {

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.member;
    console.log("User id: " + this.userDetails.id);
  
    // this.userPostData.id = this.userDetails.id;
    this.userPostData = this.userDetails;
    console.log(this.userPostData);
    console.log("Stored token: " + this.userPostData.authenticatorToken);


  }

  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }
 
  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
}
