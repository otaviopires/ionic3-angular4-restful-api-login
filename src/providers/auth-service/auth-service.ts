import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let apiUrl = 'https://gestao.aduberlandia.com.br/' + 'accounts/ws/'

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface IRequestOptions {
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
}

@Injectable()
export class AuthServiceProvider {

  constructor(public http : HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise ((resolve, reject) => {
      const options: IRequestOptions = {
        headers: new HttpHeaders({"Content-Type": "application/json"})
      };

      this.http.post(apiUrl + type, JSON.stringify(credentials), options)
      .subscribe(res => {
        resolve(res);
        console.log("auth-service works!");
        console.log(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
