import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  slideOpts= {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };
  Home_Banners:any[]=
  [
    '../../../../assets/imgs/banner.png',
    '../../../../assets/imgs/banner.png',
    '../../../../assets/imgs/banner.png'
  ];
  Home_Cards:any[]=
  [
    {
      'image':'../../../../assets/imgs/offer.png',
      'title':'offer',
      'route':'/offers'
    },
    {
      'image':'../../../../assets/imgs/medical.png',
      'title':'packages',
      'route':'/packages'
    },
    {
      'image':'../../../../assets/imgs/appoint.png',
      'title':'my-appointments',
      'route':'/appointments'
    },
    {
      'image':'../../../../assets/imgs/doctor.png',
      'title':'doctors',
      'route':'/doctors'
    },
    {
      'image':'../../../../assets/imgs/com.png',
      'title':'complaints',
      'route':'/complains'
    },
    {
      'image':'../../../../assets/imgs/recorder.png',
      'title':'Medical-file',
      'route':'/medical-file'
    }
  ];
  constructor() { 
    Storage.get({key:'UserData'}).then((res:any)=>{
      console.log('user data'+JSON.stringify(res))
    })
  
  }

  ngOnInit() {
  }

}
