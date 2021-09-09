import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HelperService } from 'src/app/services/helper/helper.service';

import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public myForm: FormGroup;
  CurrentLanguage: string = 'ar'
  LoginModel={} as User;
  isIos:boolean;
  constructor(public formBuilder: FormBuilder, private router: Router,
    private auth: AuthService, private helper: HelperService ) { }

  ngOnInit() {

    //this.CurrentLanguage=this.GetCurrentLanguage();
   // this.GetCurrentLanguage();
    console.log('CurrentLanguage : ' + this.CurrentLanguage);

    this.myForm = this.formBuilder.group({
      ID_Number: ['', Validators.required],
      Password: ['', Validators.required],
    });
 
    this.isIos=this.helper.CheckAppCurrentPlatformIsIOS();

  }

  login() {
    if (this.myForm.valid) {
      this.UserLogin();
    }
  }

  UserLogin(){
    this.helper.presentLoading()
      this.auth.UserLogin(this.myForm.value).then(
        (res: any) => {
            this.helper.dissmisLoading()
            // if (res.status == 500) {
            //   this.helper.presentToastWithOptions(res);
            // } else {
              this.router.navigate(['/main']);
             this.StoreUserData(res.data)
            //}
        },
       (err: any) => {
          if (err.status == 500) {
            this.helper.presentToastWithOptions(err.error);
          }
          this.helper.dissmisLoading()
       });
  }

  StoreUserData(data){
    //this.storage.set('UserData',data);
    Storage.set({
      key:'UserData',
      value:data
    })
  }

  ForgetPassword() {
    this.router.navigateByUrl('forget-password')
  }

  changeLanguage() {
    console.log('change langauge')
    // this.storage.get('SELECTED_LANGUAGE').then((CurrentLanguage) => {
    //   if (CurrentLanguage == 'ar') {
    //     this.helper.set_language('en')
    //   } else {
    //     this.helper.set_language('ar')
    //   }
    // })
  }

  GetCurrentLanguage(): any {
    // this.storage.get('SELECTED_LANGUAGE').then((val: string) => {
    //   this.CurrentLanguage = val;
    // });
  }

  // async setObject() {
  //   await Storage.set({
  //     key: 'user',
  //     value: JSON.stringify({
  //       id: 1,
  //       name: 'Max'
  //     })
  //   });
  // }
}



// {
//   "status":200,
//   "headers":{
//     "Cache-Control":"no-cache",
//     "Content-Length":"1192",
//     "Content-Type":"application/json; charset=utf-8","Date":"Wed, 08 Sep 2021 10:32:48 GMT",
//     "Expires":"-1","
//     Pragma":"no-cache",
//     "Server":"Microsoft-IIS/10.0",
//     "X-Android-Received-Millis":"1631097166807",
//     "X-Android-Response-Source":"NETWORK 200",
//     "X-Android-Selected-Protocol":"http/1.1",
//     "X-Android-Sent-Millis":"1631097165701",
//     "X-AspNet-Version":"4.0.30319",
//     "X-Powered-By":"ASP.NET"
//   },
//   "url":"http://93.112.7.126/TabebkomAPI/api/Account/ULogin?IDNumber=0100321123&Password=123",
//   "data":{
//     "Patient_Code":"9704",
//     "Patient_Code_F":null,
//     "Patient_Code_M":null,
//     "Fk_Branch_Id":0,
//     "Relation":null,
//     "User_Name":"sddadsasdasddsdss",
//     "Patient_Mobile":"0000000000",
//     "Password":null,
//     "Sex":"M",
//     "Fk_Company_ID":0,
//     "Confirmed_at":"0001-01-01T00:00:00",
//     "Patient_BirthDate":"2008-06-21T00:00:00",
//     "Patient_FirstName_Ar":"اختبار موبايل","Patient_FatherName_Ar":"test",
//     "Patient_MiddleName_Ar":"test","Patient_LastName_Ar":"test","Patient_Name_Ar":"موبايل تجربة",
//     "Patient_FirstName_En":"Test","Patient_FatherName_En":"Test","Patient_MiddleName_En":"Test",
//     "Patient_LastName_En":"Test","Patient_Name_En":"MobileTest","Salt":null,
//     "CountryCode":"","Latitude":null,"Longitude":null,"Patient_Phone":null,
//     "ID_Number":"0100321123","Email":"alyaa@nitcotek.com","Patient_Address":null,
//     "Patient_ID_Type":null,"Job_Name":null,"PlaceOfWork":null,
//     "Fk_RegisteredUser":null,"City":null,"Guardian":null,"Clinic_knownFrom":0,
//     "Country":null,"PatientAlterCode":null,"Patient_Age_Year":13,"IMG":""
//   }
// }
