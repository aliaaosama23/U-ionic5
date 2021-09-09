import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  '@capacitor-community/http';
import { Http, HttpResponse } from '@capacitor-community/http';
import {environment} from './../../../environments/environment'
import { User } from 'src/app/models/User';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private helper:HelperService) { }


  async UserLogin(loginModel:any){
   
    console.log(JSON.stringify(loginModel))

    const options = {
      url: `${environment.baseUrl}Account/ULogin?IDNumber=${loginModel.ID_Number}&Password=${loginModel.Password}`,
      headers: { 
        "Access-Control-Allow-Origin":"http://93.112.7.126/",
        "origin":"http://93.112.7.126/"
      },
    };
  
    const response: HttpResponse = await Http.get(options);
   
    if (response.status== 500) {
      this.helper.presentToastWithOptions(response.data);
    }

    return response.data;

    //return  this.http.get(`${environment.baseUrl}Account/ULogin?IDNumber=${loginModel.ID_Number}&Password=${loginModel.Password}`).toPromise();
  }

  CreateUser(model:any){
    const options = {
      url: environment.baseUrl+ 'Account/ULogin?IDNumber='+model.IDNumber+'&Password='+model.Password,
      //headers: { 'X-Fake-Header': 'Max was here' },
      //params: { size: 'XL' },
    };
   return  Http.get(options)
  }

}
